import WebScraping as ws

college_links = {
    'Belk College of Business': {
        'faculty-connections-name': 'college-of-business', 
        'college-link': 'https://belkcollege.uncc.edu/', 
        'faculty-directories': ['https://belkcollege.charlotte.edu/faces/faculty'],
        'faculty-imgs': dict()
        },
    'College of Arts + Architecture': {
        'faculty-connections-name': 'college-of-arts-and-architecture', 
        'college-link': 'https://coaa.uncc.edu/', 
        'faculty-directories': [
            'https://coaa.charlotte.edu/directory/faculty',
            'https://coaa.charlotte.edu/directory/part-time-faculty',
            'https://coaa.charlotte.edu/directory/adjunct-faculty'
            ],
        'faculty-imgs': dict()
        },
    'College of Computing and Informatics': {
        'faculty-connections-name': 'cci', 
        'college-link': 'https://cci.uncc.edu/', 
        'faculty-directories': ['https://cci.charlotte.edu/directory/faculty'],
        'faculty-imgs': dict()
        },
    'Cato College of Education': {
        'faculty-connections-name': 'coed',
        'college-link': 'https://education.uncc.edu/', 
        'faculty-directories': [
            'https://education.charlotte.edu/directory/5', 
            'https://education.charlotte.edu/directory/21', 
            'https://education.charlotte.edu/directory/23', 
            'https://education.charlotte.edu/directory/middle-secondary', 
            'https://education.charlotte.edu/directory/27',
            'https://education.charlotte.edu/directory/special-education',
            'https://education.charlotte.edu/directory/33',
            'https://education.charlotte.edu/directory/7'
            ],
        'faculty-imgs': dict()
        },
    'College of Health and Human Services': {
        'faculty-connections-name': 'chhs', 
        'college-link': 'https://health.uncc.edu/', 
        'faculty-directories': ['https://publichealth.charlotte.edu/directory/faculty'],
        'faculty-imgs': dict()
        },
    'College of Liberal Arts and Sciences': {
        'faculty-connections-name': 'clas', 
        'college-link': 'https://clas.uncc.edu/', 
        'faculty-directories': ['https://clas.charlotte.edu/directory-list/staff'],
        'faculty-imgs': dict()
        },
    'William States Lee College of Engineering': {
        'faculty-connections-name': 'college-of-engineering', 
        'college-link': 'https://engr.uncc.edu/', 
        'faculty-directories': ['https://coefs.uncc.edu/'],
        'faculty-imgs': dict()
        },
    }

name = {'tag':'h4', 'class_':''}
faculty_img = {'tag':'img', 'class_':'img-responsive'}
outer_container = {'tag':'div', 'class_':'thumbnail-item'}

def reset_params(vals_are_link_text=False, vals_are_links=False, vals_are_imgs=True):
    global name
    global faculty_img
    global outer_container
    params = {
    'key_container': name,
    'val_containers': [faculty_img],
    'vals_are_link_text': vals_are_link_text,
    'vals_are_links': vals_are_links,
    'vals_are_imgs': vals_are_imgs,
    'outer_container': outer_container
    }
    return params

def getCollegeFacultyLinks(link, college_params):
    containerParams = ws.PageScrapeConfig(college_params)
    soup = ws.get_soup(link)
    outputDict = ws.get_page_dict_outer(soup, containerParams)
    return outputDict

def add_college_links(college_name, params, log=False):
    for link in college_links[college_name]['faculty-directories']:
        print(link)
        college_dict = getCollegeFacultyLinks(link, params)
        for key, val in college_dict.items():
            if type(val)==type(list()):
                college_dict[key] = val[0]
                val = val[0]
            if val and val.startswith('/'):
                college_dict[key] = link+val
        college_links[college_name]['faculty-imgs'].update(college_dict)
        if log:
            print(college_dict)

def main():
    global name
    global faculty_img
    global outer_container
    
    belk_params = reset_params()
    add_college_links('Belk College of Business', belk_params)
    
    name = {'tag': 'h2', 'class_': 'heading-regular heading-med'}
    outer_container = {'tag':'a', 'class_':'thumbnail-link'}
    coaa_params = reset_params()
    add_college_links('College of Arts + Architecture', coaa_params)

    # Picking up CCI manually

    #outer_container = {'tag': 'div', 'class_': 'views-row'}
    #name = {'tag': 'h3', 'class_': ''}
    #faculty_img = {'tag': 'img', 'class_': ''}
    #cci_params = reset_params()
    #add_college_links('College of Computing and Informatics', cci_params)
    
    #outer_container = {'tag': 'td', 'class_': 'views-field views-field-field-directory-read-more-link'}
    #name = {'tag': 'img', 'class_': ''}
    #faculty_img = {'tag': 'img', 'class_': ''}
    #coed_params = reset_params()
    #add_college_links('Cato College of Education', coed_params)

    outer_container = {'tag': 'div', 'class_': 'panel'}
    name = {'tag': 'h2', 'class_': 'heading-regular heading-med'}
    chhs_params = reset_params()
    add_college_links('College of Health and Human Services', chhs_params)

    outer_container = {'tag': 'div', 'class_': 'views-field views-field-nothing'}
    name = {'tag': 'h3', 'class_': ''}
    clas_params = reset_params()
    add_college_links('College of Liberal Arts and Sciences', clas_params, log=True)

    #outer_container = {'tag': 'li', 'class_': ''}
    #name = {'tag': 'em', 'class_': ''}
    #faculty_img = {'tag': 'img', 'class_': ''}
    #coe_params = reset_params()
    #add_college_links('William States Lee College of Engineering', coe_params)

    ws.make_json('faculty_imgs', college_links)

if __name__ == '__main__':
    main()