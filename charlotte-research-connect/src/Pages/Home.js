import React from 'react'
import '../css/Home.css'
import PageTemplate from '../Components/PageTemplate'

function HomePage(props) {
    return (<>
        <PageTemplate highLight='0' {...props} />
        <div className='HomePage'>
            <div className='Visualization'>
                <h1 style={{ display: 'flex', alignItems: 'center', height: '80vh' }}>Main Visualization Will Be Here</h1>
                <div className='break' />
                <h2>Instructions on navigating viusalization</h2>
            </div>
        </div>
    </>)
}

export default HomePage