import React, { useEffect, useState } from 'react'
import '../css/Search.css'
import PageTemplate from '../Components/PageTemplate'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
const settings = require('../settings.json')

function SearchPage(props) {
    const [search, setSearch] = useState(props.searchTerm || new URLSearchParams(props.location.search).get('q'))
    const [results, setResults] = useState([])
    const [topic, setTopic] = useState(props.selectedTopic || null)

    useEffect(() => {
        console.log(search)
        if (!search) return
        async function getSearch() {
            const data = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}/search/${search}`)
                .catch(er => { return { isErrored: true, er: er.response } })
            if (data.isErrored) return console.log(data.er)
            else setResults(data.data.data)
        }
        getSearch()
    }, [search])

    const renderResult = res => {
        return <div className='ResultArea' onClick={() => { setTopic(res) }}>
            <h1>{res.label}</h1>
        </div>
    }

    return (<>
        <PageTemplate  {...props} setSearch={setSearch} />
        <div className='SearchPage'>
            <div className='SearchPane'>
                <div style={{ display: 'inline-flex', alignItems: 'center', cursor: topic ? 'pointer' : 'auto' }} onClick={() => { if (topic) setTopic(null) }}>
                    {topic ? <i className="material-icons" style={{ paddingRight: '.5rem' }}>arrow_back</i> : <></>}
                    <h1>{topic ? 'Back To Results' : `Search Results for ${search}`}</h1>
                </div>
                <div className='break' />

                {results.length > 0 ?
                    topic ?
                        <>
                            <div className='ResultArea'>
                                <h1>render the topic: {topic.label}</h1>
                            </div>
                        </>
                        :
                        results.map(m => renderResult(m))
                    :
                    <CircularProgress />
                }
            </div>

        </div>
    </>)
}

export default SearchPage