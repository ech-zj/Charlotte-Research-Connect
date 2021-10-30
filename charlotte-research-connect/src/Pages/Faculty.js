import React from 'react'
import '../css/Faculty.css'
import PageTemplate from '../Components/PageTemplate'

const Faculty = [
    {
        name: 'Thomas Carr',
        degree: 'Ph.D. Computer Science',
        mainResearch: 'Artificial Intelligence',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Eric Horne',
        degree: 'M.S. Computer Science',
        mainResearch: 'Artificial Intelligence',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Sam Chapman',
        degree: 'B.S. Computer Science',
        mainResearch: 'Software Engineering',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Nicholas Huy',
        degree: 'Ph.D. Computer Science',
        mainResearch: 'Cyber Security',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Manan Parekh',
        degree: 'Ph.D. Software Informatin Systems',
        mainResearch: 'Internet of Things',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    }
]

function FacultyPage() {
    const renderFaclty = f => {
        return (
            <div className='FacultyBox' style={{ background: '#1b1b1b67' }} >
                <img src={f.image} alt={`${f.name}`} height='200px' />
                <h2>{f.name}</h2>
                <h2>{f.degree}</h2>
                <h2>{f.mainResearch}</h2>
            </div>
        )
    }
    return (<>
        <PageTemplate highLight='2' />
        <div className='FacultyPage'>
            <div className='FacultyContainer'>
                {Faculty.map(f => {
                    return renderFaclty(f)
                })}
            </div>
        </div>
    </>)
}

export default FacultyPage