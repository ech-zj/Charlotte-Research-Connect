
from bs4 import BeautifulSoup
import requests
import json

COLLEGE_ABBRS = ['college-of-business', 'college-of-arts-and-architecture', 'cci', 'coed', 'chhs', 'clas', 'college-of-engineering', 'school-of-data-science-sds']

def get_elements(soup, key_container_and_type, val_containers_and_types, vals_are_sublinks):
    try:
        key = soup.find(key_container_and_type[0], class_ = key_container_and_type[1]).text
        vals = []
        if vals_are_sublinks:
            for val_type in val_containers_and_types:
                val_container = soup.find(val_type[0], class_=val_type[1])
                for val in val_container.find_all('a'):
                    if val.text:
                        vals.append(val.text)
        else:
            for val_type in val_containers_and_types:
                for val in soup.find_all(val_type[0], class_=val_type[1]):
                    if val.text:
                        vals.append(val.text)
        return key, vals
    except:
        print('nah')
        return False, False

def get_page_dict_outer(soup, key_container_and_type, val_containers_and_types, vals_are_sublinks=False, outer_container_and_type = False):
    '''
    :type outer_container_and_type: tuple<str> 
    :type key_container_and_type: tuple<str>
    :type val_containers_and_types: list<tuple<str>>
    tuple<str> for each of the above params are (html object type, class)
    '''
    pageDict = dict()
    if outer_container_and_type:
        outer_containers = soup.find_all(outer_container_and_type[0], class_ = outer_container_and_type[1])
        for div in outer_containers:
            key, vals = get_elements(div, key_container_and_type, val_containers_and_types, vals_are_sublinks)
            if key and vals:
                pageDict[key] = vals
    else:
        key, vals = get_elements(soup, key_container_and_type, val_containers_and_types, vals_are_sublinks)
        if key and vals:
            pageDict[key] = vals
    return pageDict

def createCollegeDict(college_abbr):
    link_to_pages = 'https://pages.charlotte.edu/connections/group/%s/page/' % college_abbr
    return get_faculty_names_dict(link_to_pages)

def get_faculty_names_dict(link):
    name_container_and_type = ('h2', 'entry-title')
    val_containers_and_types = [('div', 'connection-links-container'), ('div', 'connection-groups')]
    outer_container_and_type = ('div', 'post connection')
    outputDict, total_pages = get_all_pages(link, name_container_and_type, val_containers_and_types, True, outer_container_and_type)
    return outputDict, total_pages

def get_all_pages(link, key_container_and_type, val_containers_and_types, vals_are_sublinks=False, outer_container_and_type = False):
    '''
    :type outer_container_and_type: tuple<str> 
    :type key_container_and_type: tuple<str>
    :type val_containers_and_types: list<tuple<str>>
    tuple<str> for each of the above params are (html object type, class)
    '''
    page_exists = True
    page_num = 1
    allPagesDict = dict()
    while page_exists:
        link_to_page = '%s%d/' % (link, page_num)
        try:
            html_response = requests.get(link_to_page)
            html_text = html_response.content
            soup = BeautifulSoup(html_text, 'lxml')
            page_results_dict = get_page_dict_outer(soup, key_container_and_type, val_containers_and_types, vals_are_sublinks, outer_container_and_type)
            if len(page_results_dict) < 1:
                page_exists = False
                continue
            else:
                allPagesDict.update(page_results_dict)
            page_num += 1
        except:
            print('pages found %d' % page_num-1)
            page_exists = False
    return allPagesDict, page_num-1 # total pages

def make_json(jsonData):
    json_object = json.dumps(jsonData, indent=4)
    with open('sample.json', 'w') as outfile:
        outfile.write(json_object)

def main():
    colleges_dict = dict.fromkeys(COLLEGE_ABBRS)
    for college_abbr in COLLEGE_ABBRS:
        colleges_dict[college_abbr], total_pages = createCollegeDict(college_abbr)
        print(' college:\t%s\n total pages:\t%d' % (college_abbr, total_pages))
    make_json(colleges_dict)

if __name__ == '__main__':
    main()