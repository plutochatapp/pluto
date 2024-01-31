import { initializeApp } from 'firebase/app'
import firebaseConfig from '../firebaseConfig.json'
import { getAuth } from 'firebase/auth'

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { app, auth }