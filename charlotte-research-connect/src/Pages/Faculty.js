import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Faculty.css'
import PageTemplate from '../Components/PageTemplate'
const settings = require('../settings.json')

function FacultyPage() {
    const [faculty, setFaculty] = useState([])
    //const [selectedFaculty, setSelectedFaculty] = useState(null)

    useEffect(() => {
        const getTopics = async () => {
            const data = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}/faculty/all`)
                .catch(er => { return { isErrored: true, er } })
            if (data.isErrored || !data.data || !data.data.data) setFaculty({ errored: true })
            else setFaculty(data.data.data)
        }
        getTopics()
    }, [])

    const renderFaclty = f => {
        return (
            <div className='FacultyBox' >
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
                {faculty.errored ?
                    <h1>Error Loading Faculty</h1>
                    :
                    faculty.map(f => {
                        return renderFaclty(f)
                    })
                }
            </div>
        </div>
    </>)
}

export default FacultyPage