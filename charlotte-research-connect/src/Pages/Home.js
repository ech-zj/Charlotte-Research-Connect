import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import PageTemplate from '../Components/PageTemplate'
import Graph from "react-graph-vis";
import axios from 'axios';
const settings = require('../settings.json')

function HomePage(props) {
    const [data, setData] = useState(null)
    const [viewFaculty, setViewFaculty] = useState(false)

    useEffect(() => {
        async function getData() {
            const data = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}${viewFaculty ? '/visuals/faculty' : '/visuals/main'}`)
                .catch(er => { return { isErrored: true, er } })
            console.log(data)
            if (data.isErrored || !data.data || !data.data.data) { console.log(data.er.response); setData({ errored: true }) }
            else setData(data.data.data)
        }
        getData()
    }, [])

    return (<>
        <PageTemplate highLight='0' {...props} />
        <div className='HomePage'>
            <div className='Visualization'>
                {data ?
                    <Graph style={{ height: '95vh', width: '100vw' }} graph={data} options={options} />
                    :
                    <h1 style={{ display: 'flex', alignItems: 'center', height: '80vh' }}>Loading...</h1>
                }
            </div>
        </div>
    </>)
}

export default HomePage

const options = {
    autoResize: true,
    clickToUse: true,
    edges: {
        color: "#000000"
    },
    groups: {
        'college-of-business': {},
        'college-of-arts-and-architecture': {},
        'cci': {},
        'coed': {},
        'chhs': {},
        'clas': {},
        'college-of-engineering': {}
    },
    interaction: {
        hideEdgesOnDrag: true,
        hideEdgesOnZoom: true,
        selectable: false,
        navigationButtons: true,
    },
    physics: {
        barnesHut: {
            centralGravity: 0.0001,
            avoidOverlap: .65
        },
        repulsion: {
            centralGravity: 0.0001
        }
    }
}

