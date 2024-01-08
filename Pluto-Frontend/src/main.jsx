import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './components/App.jsx'
import Navbar from './components/Navbar.jsx'

import './css/main.css'

let client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql/',
    cache: new InMemoryCache()
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
        <Navbar />
    </ApolloProvider>
  </React.StrictMode>,
)