import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import PageTemplate from '../Components/PageTemplate'

function LogoutPage(props) {
    const [loggedOut, setLoggedOut] = useState(false)

    useEffect(() => {
        async function logoutLogic() {
            // Add logout logic here btw
            setTimeout(setLoggedOut(true), 1000)
        }
        logoutLogic()
    })

    if (loggedOut) return <Redirect to='/' />
    return <PageTemplate />

}

export default LogoutPage