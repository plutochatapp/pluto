import '../css/index.css'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

function Loginform() {

    const [passwordShowing, setPasswordShowing] = useState(false)

    const managePasswordFieldVisibility = () => {
        if (!passwordShowing) {setPasswordShowing(true)}
        if (passwordShowing) {setPasswordShowing(false)}
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-modal-backdrop-color">
            <div className="p-8 bg-navbar-color rounded-lg max-w-md my-52 m-auto">
                <p className="text-white text-xl font-bold text-center font-ubuntu">Log In</p>
                <form className='flex flex-col mt-4'>
                    <label className='text-white text-md font-ubuntu ml-1'>Email: </label>
                    <input type='email' className='bg-navbar-btn-color rounded-md mt-2 w-full p-2 px-4 cursor-text text-stone-300 text-sm outline-none mb-4 placeholder:text-stone-500' placeholder='John' id='email-input'></input>
                    <label className='text-white text-md font-ubuntu ml-1'>Password: </label>
                    <div className='flex flex-row bg-navbar-btn-color rounded-md mt-2 p-2 px-4 w-full mb-7 justify-between'>
                        <input type={passwordShowing ? 'text' : 'password'} className='bg-navbar-btn-color w-full cursor-text text-stone-300 text-sm outline-none placeholder:text-stone-500' placeholder='johnlovescats' id='password-input'></input>
                        <span className='cursor-pointer text-white pl-4 h-fit self-center' onClick={managePasswordFieldVisibility}>
                            {passwordShowing ? <FaRegEyeSlash className='text-stone-500' /> : <FaRegEye className='text-stone-500' />}
                        </span>
                    </div>
                    <button className='bg-btn-color m-auto p-2 px-4 rounded-lg text-black font-inter-bold hover:opacity-95'>Login</button>
                </form>
                <div className='flex flex-row w-full mt-10'>
                    <p className='text-sm text-stone-300'>Don't have an account? </p>
                    <a className='text-sm text-blue-700 ml-1 cursor-pointer hover:underline'>Sign Up!</a>
                </div>
            </div>
        </div>
  )
}

export default Loginform