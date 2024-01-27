import { initializeApp } from 'firebase/app'
import firebaseConfig from '../firebaseConfig.json'

const app = initializeApp(firebaseConfig)

export { app }