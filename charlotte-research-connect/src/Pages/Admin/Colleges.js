import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageTemplate from '../../Components/Admin Template'
import CollegeService from '../../Services/Colleges'

const settings = require('../../settings.json')

function CollegesPage(props) {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}/a/colleges/all`)
            setData(response.data)

        }
        getData()
    }, [])

    async function handleInputChange(id, e) {
        if(e.target.classList.contains('invalid')) e.target.classList.remove('invalid')
        let formData = { id, change: null, values: null }
        formData.change = e.target.id.split('-')[1]
        formData.values = e.target.value

        if (!formData.id || !formData.change || !formData.values) return e.target.classList.add('invalid')

        const token = 'tbi'
        let res = await CollegeService.edit(formData, token)
        if (res.isErrored) return e.target.classlist.add('invalid')
    }

    function handleKeyDown(id, e) {
        if (e.key.code === 'Enter') return handleInputChange(id, e)
    }

    function renderRow(row) {
        return (<tr key={row.id}>
            <td><input type='text'
                defaultValue={row.name}
                id={`${row.id}-name`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.url}
                id={`${row.id}-url`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.color}
                id={`${row.id}-color`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
        </tr>)
    }

    return (<>
        <PageTemplate highLight='1' />
        <div className='AdminHome'>
            <table className='rows'>
                <thead>
                    <tr>
                        <th>College Name</th>
                        <th>College URL</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderRow)}
                </tbody>
            </table>
        </div>
    </>)
}

export default CollegesPage

