import '../css/index.css'

import { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { app } from '../firebase.js'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const auth = getAuth(app)

function Signupform() {

    const [passwordShowing, setPasswordShowing] = useState(false)

    const managePasswordFieldVisibility = () => {
        if (!passwordShowing) {setPasswordShowing(true)}
        if (passwordShowing) {setPasswordShowing(false)}
    }

    return (
        <div>
        </div>
    )
}

export default Signupform