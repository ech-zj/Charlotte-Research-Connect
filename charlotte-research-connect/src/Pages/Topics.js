import React from 'react'
import '../css/Topics.css'
import PageTemplate from '../Components/PageTemplate'

const topics = [
    'Art', 'Anatomy', 'Biochemistry', 'Chemistry', 'Computer Science', 'Electrical Engineering',
    'Physics', 'More Coming Soon'
]

function TopicPage() {
    const renderTopic = (topic) => {
        console.log(topic)
        return (
            <h2 className='Topic'>{topic}</h2>
        )
    }
    return (<>
        <PageTemplate highLight='1' />
        <div className='TopicsPage'>
            <div className='TopicsContainer'>
                <h1>Topics</h1>
                <div className='break' />
                {topics.map(t => {
                    return renderTopic(t)
                })}
            </div>
        </div>
    </>)
}

export default TopicPage