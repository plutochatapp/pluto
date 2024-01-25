import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'

import { app } from '../firebase.js'

import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import Home from './Home.jsx'
import Loginform from './Loginform.jsx'
import Signupform from './Signupform.jsx'

 
const auth = getAuth(app)

function DecideCurrentPage() {
    const [user] = useAuthState(auth)

    if (!
        user) {
        return <Navigate to="/login" />
    }

    else {
        return <Home />
    }
}

export default function App() {
    let element = useRoutes([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <DecideCurrentPage />,
                },
                {
                    path: 'login',
                    element: <Loginform />,
                }, 
                {
                    path: 'signup',
                    element: <Signupform />,
                }
            ]
        }
    ])

    return element
}