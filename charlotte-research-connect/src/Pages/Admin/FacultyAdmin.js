import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageTemplate from '../../Components/Admin Template'
import FacultyService from '../../Services/Faculty'

const settings = require('../../settings.json')

function FacultyAdminPage(props) {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}/a/faculty/all`)
            setData(response.data)

        }
        getData()
    }, [])

    async function handleInputChange(id, e) {
        if (e.target.classList.contains('invalid')) e.target.classList.remove('invalid')
        let formData = { id, change: null, values: null }
        formData.change = e.target.id.split('-')[1]
        formData.values = e.target.value

        if (!formData.id || !formData.change || !formData.values) return e.target.classList.add('invalid')

        const token = 'tbi'
        let res = await FacultyService.edit(formData, token)
        if (res.isErrored) return e.target.classList.add('invalid')
    }

    function handleKeyDown(id, e) {
        if (e.key.code === 'Enter') return handleInputChange(id, e)
    }

    function renderRow(row) {
        console.log(row)
        return (<tr key={row.id}>
            <td><input type='text'
                placeholder='Email'
                defaultValue={row.email}
                id={`${row.id}-email`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='Phone'
                defaultValue={row.phone}
                id={`${row.id}-phone`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='Image URL'
                defaultValue={row.image}
                id={`${row.id}-image`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='Concentration'
                defaultValue={row.concentration}
                id={`${row.id}-concentration`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='Degree'
                defaultValue={row.degree}
                id={`${row.id}-degree`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='College'
                defaultValue={row.college_name}
                id={`${row.id}-college_name`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='Webpage URL'
                defaultValue={row.url}
                id={`${row.id}-url`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='Forst Name'
                defaultValue={row.first_name}
                id={`${row.id}-first_name`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                placeholder='Last Name'
                defaultValue={row.last_name}
                id={`${row.id}-last_name`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
        </tr>)
    }

    return (<>
        <PageTemplate highLight='4' />
        <div className='AdminHome'>
            <table className='rows'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Concentration</th>
                        <th>Degree</th>
                        <th>College</th>
                        <th>URL</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderRow)}
                </tbody>
            </table>
        </div>
    </>)
}

export default FacultyAdminPage