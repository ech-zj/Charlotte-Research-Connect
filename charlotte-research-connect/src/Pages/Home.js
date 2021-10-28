import React from 'react'
import '../css/Home.css'
import PageTemplate from './PageTemplate'

function HomePage(props) {
    return (<>
        <PageTemplate highLight='0' {...props} />
    </>)
}

export default HomePage