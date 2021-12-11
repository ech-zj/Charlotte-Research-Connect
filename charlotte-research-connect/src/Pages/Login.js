import React from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom';
import PageTemplate from '../Components/PageTemplate'
import { ReactComponent as GoogleLogo } from '../Google.svg';
// import UserService from '../Services/User'
import '../css/Login.css'

function LoginPage(props) {
    const history = useHistory()
    async function handleLogin(jw) {
        // UserService.verify(jw.tokenId)
        // history.push('/a/home')
        if (jw.vu) {
            if (jw.vu.jf) localStorage.setItem('name', jw.vu.jf)
            history.push('/a/home')
        }
    }


    return (
        <div>
            <PageTemplate />
            <div className='LoginPanel'>
                <div style={{ width: '250px', height: '250px', marginBottom: '4rem' }}><GoogleLogo /></div>
                <GoogleLogin
                    render={renderProps => (
                        <button onClick={renderProps.onClick}>Login with Google</button>
                    )}
                    clientId='128477008433-0qrl14k83ljq8ih49lbmdn6hibnh1bd1.apps.googleusercontent.com'
                    buttonText="Login with Google"
                    onSuccess={(props) => handleLogin(props)}
                    onFailure={(props) => handleLogin(props)}
                    cookiePolicy={'single_host_origin'}
                />
            </div>

        </div>
    )
}

export default LoginPage