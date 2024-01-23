import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
 
import Navbar from './Navbar.jsx'
import Loginform from './Loginform.jsx';

import firebaseConfig from '../../firebaseConfig.json'

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const firestore = getFirestore(app)
 
function DecideCurrentPage() {
    return <Navigate to='/login' />   
}

export default function App() {
    let element = useRoutes([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <DecideCurrentPage />
                },
                {
                    path: 'login',
                    element: <Loginform />,
                }
            ]
        }
    ])

    return element
}