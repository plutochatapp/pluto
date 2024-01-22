import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';
 
import Navbar from './Navbar.jsx'
import Loginform from './Loginform.jsx';


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