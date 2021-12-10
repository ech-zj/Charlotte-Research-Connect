import React from 'react'
import { useHistory } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import ParticlesElement from '../Components/Particles';
import BadgerParticles from './Badger Particles';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Template.css';

function PageTemplate(props) {
    const history = useHistory()
    const searchHandler = () => {
        let v = document.getElementById('searchField').value;
        if (v) {
            if (props.setSearch) props.setSearch(v)
            history.push(`/search?q=${v}`)
        }
    }
    return (
        <div className="App">
            {props.highLight === '3' ?
                <BadgerParticles {...props} /> :
                <ParticlesElement  {...props} />}
            <CookieConsent background={'#000'} color={'#fff'}>This site uses cookies</CookieConsent>
            <div className='TopBar'>
                <div className='AccountNav'>
                    <PersonIcon style={{cursor:'pointer'}} onClickCapture={(e) => history.push('/login')}/>
                </div>
                <div className='PageNav'>
                    <p className={props.highLight === '0' ? 'active' : ''} onClickCapture={(e) => history.push('/')}>Home</p>
                    <p className={props.highLight === '1' ? 'active' : ''} onClickCapture={(e) => history.push('/topics')}>Topics</p>
                    <p className={props.highLight === '2' ? 'active' : ''} onClickCapture={(e) => history.push('/faculty')}>Faculty</p>
                    <p className={props.highLight === '3' ? 'active' : ''} onClickCapture={(e) => history.push('/about')}>About</p>
                </div>
                <div className='Search'>
                    <div className='SearchBar'>
                        <input id='searchField' type='text' placeholder='Search...' onKeyDown={e => { if (e.key === 'Enter') searchHandler() }} />
                    </div>
                    <div className='SearchContainer' onClick={() => searchHandler()}>
                        <SearchIcon size='2rem' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageTemplate