import WebScraping as ws

college_links = {
    'Belk College of Business': ('college-of-business', 'https://belkcollege.uncc.edu/', ['https://belkcollege.charlotte.edu/faces/faculty']),
    'College of Arts + Architecture': ('college-of-arts-and-architecture', 'https://coaa.uncc.edu/', [
        'https://coaa.charlotte.edu/directory/faculty',
        'https://coaa.charlotte.edu/directory/part-time-faculty',
        'https://coaa.charlotte.edu/directory/adjunct-faculty'
        ]),
    'College of Computing and Informatics': ('cci', 'https://cci.uncc.edu/', ['https://cci.charlotte.edu/directory/faculty']),
    'Cato College of Education': ('coed',
        'https://education.uncc.edu/', 
        [
            'https://education.charlotte.edu/directory/5', 
            'https://education.charlotte.edu/directory/21', 
            'https://education.charlotte.edu/directory/23', 
            'https://education.charlotte.edu/directory/middle-secondary', 
            'https://education.charlotte.edu/directory/27',
            'https://education.charlotte.edu/directory/special-education',
            'https://education.charlotte.edu/directory/33',
            'https://education.charlotte.edu/directory/7'
        ]),
    'College of Health and Human Services': ('chhs', 'https://health.uncc.edu/', ['https://publichealth.charlotte.edu/directory/faculty']),
    'College of Liberal Arts and Sciences': ('clas', 'https://clas.uncc.edu/', ['https://clas.charlotte.edu/directory-list/staff']),
    'William States Lee College of Engineering': ('college-of-engineering', 'https://engr.uncc.edu/', ['https://coefs.uncc.edu/']),
    }

name = {'tag':'h4', 'class_':''}
faculty_link = {'tag':'a', 'class_':''}
outer_container = {'tag':'div', 'class_':'thumbnail-title'}

def reset_params(vals_are_link_text=False, vals_are_links=True):
    global name
    global faculty_link
    global outer_container
    params = {
    'key_container': name,
    'val_containers': [faculty_link],
    'vals_are_link_text': vals_are_link_text,
    'vals_are_links': vals_are_links,
    'outer_container': outer_container
    }
    return params

def getCollegeFacultyLinks(link, college_params):
    containerParams = ws.PageScrapeConfig(college_params)
    soup = ws.get_soup(link)
    outputDict = ws.get_page_dict_outer(soup, containerParams)
    return outputDict

def main():
    global name
    global faculty_link
    global outer_container
    
    belk_params = reset_params()
    for link in college_links['Belk College of Business'][2]:
        belk_faculty_dict = getCollegeFacultyLinks(link, belk_params)
    name = {'tag': 'h2', 'class_': 'heading-regular heading-med'}
    faculty_link = {'tag': 'a', 'class_': 'thumbnail-link'}
    outer_container = {'tag':'a', 'class_':'thumbnail-link'}
    coaa_params = reset_params()
    for link in college_links['College of Arts + Architecture'][2]:
        print(link)
        coaa_faculty_dict = getCollegeFacultyLinks(link, coaa_params)
        print(coaa_faculty_dict)
    #ws.make_json('faculty', faculty_dict)

if __name__ == '__main__':
    main()