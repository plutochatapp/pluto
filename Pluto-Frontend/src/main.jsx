import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

let client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql/',
    cache: new InMemoryCache()
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>,
)