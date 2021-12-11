import React from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import '../css/Template.css'
import '../css/Admin.css'
import '../css/KeyFrames.css'

function PageTemplate(props) {
    const history = useHistory()
    if(!checkAuth(props)) return <Redirect to='/login' />
    return (
        <div className="App">
            <div className='TopBar'>
                <div className='PageNav'>
                    <p className={props.highLight === '0' ? 'active' : ''} onClick={()=>history.push('/a/home')}>Home</p>
                </div>
                <div className='PageNav'>
                    <p className={props.highLight === '1' ? 'active' : ''}onClick={()=>history.push('/a/college')}>Colleges</p>
                    <p className={props.highLight === '2' ? 'active' : ''}onClick={()=>history.push('/a/main')}>Main Topics</p>
                    <p className={props.highLight === '3' ? 'active' : ''}onClick={()=>history.push('/a/sub')}>Sub Topics</p>
                    <p className={props.highLight === '4' ? 'active' : ''}onClick={()=>history.push('/a/faculty')}>Faculty</p>
                </div>
                <div className='PageNav'>
                    <p onClick={()=>history.push('/logout')}>Logout</p>
                </div>
            </div>
        </div >
    )
}

function checkAuth(props) {
    const isAuth = true;

    return isAuth
}

export default PageTemplate