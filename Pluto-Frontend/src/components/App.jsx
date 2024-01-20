import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import Navbar from './Navbar.jsx'
import Loginform from './Loginform.jsx';

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
    if (loading) {
        return <p>Loading...</p>
    }
    // If error, it means that the user is not logged in
    if (error) {
        return (
            <>
                <Loginform />
            </>
        )
    }
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