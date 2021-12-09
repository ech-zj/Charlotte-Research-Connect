import React from 'react'
import GoogleLogin from 'react-google-login'
import PageTemplate from '../Components/PageTemplate'
import { ReactComponent as GoogleLogo } from '../Google.svg';
import UserService from '../Services/User'
import '../css/Login.css'

function LoginPage(props) {
    async function handleLogin(jw) {
        console.log(jw)
        UserService.verify(jw.tokenId)
    }


    return (
        <div>
            <PageTemplate />
            <div className='LoginPanel'>
                <div style={{width:'400px', height: '400px'}}><GoogleLogo/></div>
                <GoogleLogin
                    render={renderProps => (
                        <button onClick={renderProps.onClick}>Login with Google</button>
                    )}
                    clientId='128477008433-0qrl14k83ljq8ih49lbmdn6hibnh1bd1.apps.googleusercontent.com'
                    buttonText="Login with Google"
                    onSuccess={handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
            </div>

        </div>
    )
}

export default LoginPage