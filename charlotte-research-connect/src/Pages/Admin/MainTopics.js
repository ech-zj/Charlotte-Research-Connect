import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageTemplate from '../../Components/Admin Template'
import MainService from '../../Services/Main'

const settings = require('../../settings.json')

function MainTopicsPage(props) {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}/a/main/all`)
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
        let res = await MainService.edit(formData, token)
        if (res.isErrored) return e.target.classlist.add('invalid')
    }

    function handleKeyDown(id, e) {
        if (e.key.code === 'Enter') return handleInputChange(id, e)
    }

    function renderRow(row) {
        return (<tr key={row.id}>
            <td><input type='text'
                defaultValue={row.label}
                id={`${row.id}-label`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
            <td><input type='text'
                defaultValue={row.college}
                id={`${row.id}-college`}
                onBlur={e => handleInputChange(row.id, e)}
                onKeyDown={e => handleKeyDown(row.id, e)} /></td>
        </tr>)
    }

    return (<>
        <PageTemplate highLight='2' />
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


export default MainTopicsPage