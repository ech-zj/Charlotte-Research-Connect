import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Faculty.css'
import PageTemplate from '../Components/PageTemplate'
const settings = require('../settings.json')
const colleges = [
    { text: 'Computing and Informatics', id: 'College of Computing and Informatics' },
    { text: 'Engineering', id: 'William States Lee College of Engineering' },
    { text: 'Liberal Arts and Sciences', id: 'College of Liberal Arts and Sciences' },
    { text: 'Health and Human Services', id: 'College of Health and Human Services' },
    { text: 'Arts + Architecture', id: 'College of Arts + Architecture' },
    { text: 'Education', id: 'Cato College of Education' },
    { text: 'Business', id: 'Belk College of Business' },
]

function FacultyPage(props) {
    const [college, setCollege] = useState(null)
    const [faculty, setFaculty] = useState([])
    const [selectedFaculty, setSelectedFaculty] = useState(null)

    useEffect(() => {
        //this might move to load on college selection depending on performance
        const getFaculty = async () => {
            const data = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}/faculty/all`)
                .catch(er => { return { isErrored: true, er } })
            if (data.isErrored || !data.data || !data.data.data) { console.log(data.er.response); setFaculty({ errored: true }) }
            else setFaculty(data.data.data)
        }
        getFaculty()
    }, [])

    const renderColleges = c => {
        return <div className='FacultyBox' onClick={() => setCollege(c.id)}>
            <h1>{c.text}</h1>
        </div>
    }

    const renderFaclty = f => {
        return (
            <div className='FacultyBox' style={{ cursor: 'pointer' }} onClick={() => { setSelectedFaculty(f.id) }}>
                {f.image ? <img src={f.image} alt={`${f.name}`} height='200px' /> : <></>}
                <h2>{f.first_name} {f.last_name}</h2>
                {college === 'All' ? <h2>{f.college_name}</h2> : <></>}
                <h2>{f.degree}</h2>
                <h2>{f.concentration}</h2>
                {f.url ? <a href={f.url} target='_blank' rel='noreferrer'>View Page</a> : <></>}
            </div>
        )
    }
    return (<>
        <PageTemplate highLight='2' />
        <div className='FacultyPage'>
            <div className='FacultyContainer'>
                {college ?
                    <div style={{ display: 'inline-flex', textAlign: 'center', cursor: 'pointer', alignItems: 'center' }} onClick={() => { setCollege(null) }}>
                        <i className="material-icons" style={{ paddingRight: '.5rem' }}>arrow_back</i>
                        <h1>You are viewing {college}</h1>
                    </div>
                    :
                    <div style={{ display: 'inline-flex' }}>
                        <h1>Select a topic to get started or click</h1>
                        <h1 style={{ padding: '0 .2em', textDecoration: 'underline 1px', cursor: 'pointer' }} onClick={() => { setCollege('All') }}>here</h1>
                        <h1>to view all</h1>
                    </div>}
                <div className='break' />
                <hr style={{ margin: '1rem', width: '60vw' }} />
                <div className='break' />
                {faculty.errored ?
                    <h1>Error Loading Faculty</h1>
                    :

                    college ? faculty.map(f => {
                        console.log(f)
                        if (f.college_name === college || college === 'All') return renderFaclty(f)
                        else return <></>
                    }) :
                        colleges.map(c => { return renderColleges(c) })

                }
            </div>
        </div>
    </>)
}

export default FacultyPage