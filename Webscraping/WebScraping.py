
from bs4 import BeautifulSoup
import requests
import json

def get_names_and_topics(link):
    html_response = requests.get(link)
    html_text = html_response.content
    soup = BeautifulSoup(html_text, 'lxml')
    people_divs = soup.find_all('div', class_ = 'post connection')
    names_and_topics = dict()
    for div in people_divs:
        try:
            name = div.find('h2', class_ = 'entry-title').text
            topics_div = div.find('div', class_ = 'connection-links-container')
            groups_div = div.find('div', class_ = 'connection-groups')
            groups = []
            topics = []
            for topic in topics_div.find_all('a'):
                if topic.text:
                    topics.append(topic.text)
            for group in groups_div.find_all('a'):
                if group.text:
                    groups.append(group.text)
            names_and_topics[name] = groups+topics
        except:
            print('nah')
    return names_and_topics

outputCciDict = dict()
page_exists = True
page_num = 1
while page_exists:
    try:
        link = 'https://pages.charlotte.edu/connections/group/cci/page/%d/' % page_num
        requests.get(link)
        cool_stuff = get_names_and_topics(link)
        if not cool_stuff:
            page_exists = False
            continue
        else:
            outputCciDict.update(cool_stuff)
        print('page %d' % page_num)
        print(cool_stuff)
        page_num += 1
    except:
        print('pages found %d' % page_num)
        page_exists = False

json_object = json.dumps(outputCciDict, indent=4)
with open('cci_sample.json', 'w') as outfile:
    outfile.write(json_object)