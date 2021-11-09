import WebScraping as ws

college_links = {
    'Belk College of Business': ('https://belkcollege.uncc.edu/', ['https://belkcollege.charlotte.edu/faces/faculty']),
    'College of Arts + Architecture': ('https://coaa.uncc.edu/', [
        'https://coaa.charlotte.edu/directory/faculty',
        'https://coaa.charlotte.edu/directory/part-time-faculty',
        'https://coaa.charlotte.edu/directory/adjunct-faculty',
        ''
        ]),
    'College of Computing and Informatics': ('https://cci.uncc.edu/', ['https://cci.charlotte.edu/directory/faculty']),
    'Cato College of Education': (
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
    'College of Health and Human Services': ('https://health.uncc.edu/', ['https://publichealth.charlotte.edu/directory/faculty']),
    'College of Liberal Arts and Sciences': ('https://clas.uncc.edu/', ['https://clas.charlotte.edu/directory-list/staff']),
    'William States Lee College of Engineering': ('https://engr.uncc.edu/', ['https://coefs.uncc.edu/']),
    }

def getCollegeLinks(link):
    college = {'tag':'h2', 'class_':''}
    college_link = {'tag':'div', 'class_':'views-row views-row-1 views-row-odd views-row-first'}
    outer_container = {'tag':'div', 'class_':'on-campus-numbers-category College and Academic Departments'}
    params = {
        'key_container': college,
        'val_containers': [college_link],
        'vals_are_sublinks': True,
        'outer_container': outer_container
        }
    containerParams = ws.PageScrapeConfig(params)
    soup = ws.get_soup(link)
    outputDict = ws.get_page_dict_outer(soup, containerParams)
    return outputDict

def main():
    colleges_dict = getCollegeLinks('https://directory.charlotte.edu/')
    ws.make_json('colleges', colleges_dict)

if __name__ == '__main__':
    main()