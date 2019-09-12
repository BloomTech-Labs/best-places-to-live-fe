import React, { useState, useEffect } from 'react'

import Register from './register'
import Login from './login'
import Home from '../Home'

import axios from 'axios'


const index = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        
        try {
            logged = axios.get('https://stagebe.letsmovehomie.com/auth/validation')
            console.log(logged)
            setIsLoggedIn(logged)
        } catch (err) {
            console.log(`unable to validate login: ${err}`)
        }
        
    })

    if(isLoggedIn){
        return <Home />
    } else {
        return <Login />        
    }

}

export default index
