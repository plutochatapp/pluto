import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import Navbar from './Navbar.jsx'

// Send a query to get the current user's username
const query = gql`
    query checkUserLoggedIn {
        user(username:"currentUser") {
            username
        }
    }
`

function App() {
    const { loading, error, data } = useQuery(query);
    // If loading display a buffer 
    if (loading) {}
    // If error display a modal saying "unknown error"
    if (error) {}
    // Else 
    else {
        return (
            <>
                <Navbar />
            </>
        )
        
    }
}

export default App