import React from 'react'
import PageTemplate from '../../Components/Admin Template'

function HomePage(props) {
    const name = 'Thomas'
    return (<>
        <PageTemplate highLight='0' />
        <div className='AdminHome'>
            <h1>Welcome: {name}</h1>
        </div>
    </>)
}

export default HomePage

