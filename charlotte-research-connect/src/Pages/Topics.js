import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageTemplate from '../Components/PageTemplate'
import '../css/Topics.css'
const settings = require('../settings.json')

function TopicPage(props) {
    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState(null)

    useEffect(() => {
        const getTopics = async () => {
            const data = await axios.get(`${settings.DevEnv ? settings.NoSSL : settings.APIBase}/topics/overview`)
                .catch(er => { return { isErrored: true, er } })
            if (data.isErrored || !data.data) setTopics({ errored: true })
            else setTopics(data.data)
        }
        getTopics()
    }, [])

    const renderTopic = (topic) => {
        return (
            <h2 key={topic.id} className='Topic' onClick={() => { setSelectedTopic(topic.label) }}>{topic.label}</h2>
        )
    }

    return (<>
        <PageTemplate {...props} highLight='1' />
        <div className='TopicsPage'>
            <div className='TopicsContainer'>
                <div style={{ display: 'inline-flex', alignItems: 'center', cursor: selectedTopic ? 'pointer' : 'auto' }} onClick={() => { if (selectedTopic) setSelectedTopic(null) }}>
                    {selectedTopic ? <i class="material-icons" style={{ paddingRight: '.5rem' }}>arrow_back</i> : <></>}
                    <h1>{selectedTopic ? 'Back To Topics' : 'Topics'}</h1>
                </div>
                <div className='break' />
                {topics.errored ?
                    <h2>Error Getting Topics</h2> :
                    selectedTopic ? <>
                        <hr style={{ margin: '1rem', width: '60vw' }} />
                        <div className='break' />
                        <h1>You Selected {selectedTopic}</h1>
                        <div className='break' style={{paddingTop: '3   rem'}} />
                        <h1>This implementation will be coming soon</h1>
                    </> :
                        topics.map(t => {
                            return renderTopic(t)
                        })
                }
            </div>
        </div>
    </>)
}

export default TopicPage