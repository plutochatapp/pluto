import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const app = initializeApp({
    apiKey: "AIzaSyBrjQkmH5z1ng_33LjWYn6LWmuGuKvFjno",
    authDomain: "pluto-1b0c7.firebaseapp.com",
    projectId: "pluto-1b0c7",
    storageBucket: "pluto-1b0c7.appspot.com",
    messagingSenderId: "705436639345",
    appId: "1:705436639345:web:f45aa5bd036b1d55c4bbd0"
})

const auth = getAuth(app)

export { app, auth }