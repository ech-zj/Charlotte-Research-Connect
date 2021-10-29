import React from 'react'
import '../css/About.css'
import PageTemplate from '../Components/PageTemplate'

function AboutPage() {
    return (<>
        <PageTemplate highLight='3' />
        <div className='AboutPage'>
            <div className='AboutContainer'>
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '50vw' }}>
                    <h1 style={{ textDecoration: 'underline' }}>We are Charlotte Research Connect</h1>
                    <br />
                    <h2>UNCC has a collection of research and data collected throughout the years, but there is no method of viewing and sorting researchers based on their topics and data.</h2>
                    <br />
                    <h2>We set out to develop a website to display amassed relevant information for each contributor, which will include the topics they researched as well as their interests and capabilities. The website will use web scraping to collect data from various UNC Charlotte websites.</h2>
                </div>
                <img src='https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640' alt='Group 19' />
            </div>
        </div>
    </>)
}

export default AboutPage