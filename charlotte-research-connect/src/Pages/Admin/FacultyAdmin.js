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
        if (res.isErrored) return e.target.classlist.add('invalid')
    }

    function handleKeyDown(id, e) {
        if (e.key.code === 'Enter') return handleInputChange(id, e)
    }

    function renderRow(row) {
        return (<tr key={row.id}>
            <td><input type='text'
                defaultValue={row.email}
                id={`${row.id}-email`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.phone}
                id={`${row.id}-phone`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.image}
                id={`${row.id}-image`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.concentration}
                id={`${row.id}-concentration`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.degree}
                id={`${row.id}-degree`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.phone}
                id={`${row.id}-phone`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.phone}
                id={`${row.id}-phone`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.phone}
                id={`${row.id}-phone`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.phone}
                id={`${row.id}-phone`}
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
                        <th>Topic Name</th>
                        <th>College</th>
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