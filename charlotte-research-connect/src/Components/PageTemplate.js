import React from 'react'
import { useHistory } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import ParticlesElement from '../Components/Particles';
import '../css/Template.css';

function PageTemplate(props) {
    const history = useHistory()
    return (
        <div className="App">
            <ParticlesElement  {...props} />
            <CookieConsent background={'#000'} color={'#fff'}>This site uses cookies</CookieConsent>
            <div className='TopBar'>
                <div className='AccountNav'>
                    <p>Account</p>
                </div>
                <div className='PageNav'>
                    <p className={props.highLight === '0' ? 'active' : ''} onClickCapture={(e) => history.push('/')}>Home</p>
                    <p className={props.highLight === '1' ? 'active' : ''} onClickCapture={(e) => history.push('/topics')}>Topics</p>
                    <p className={props.highLight === '2' ? 'active' : ''} onClickCapture={(e) => history.push('/faculty')}>Faculty</p>
                    <p className={props.highLight === '3' ? 'active' : ''} onClickCapture={(e) => history.push('/about')}>About</p>
                </div>
                <div className='Search'>
                    <p>Search</p>
                </div>
            </div>
        </div >
    )
}

export default PageTemplate