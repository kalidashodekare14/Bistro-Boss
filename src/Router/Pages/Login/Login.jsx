import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImage from '../../../assets/others/authentication2.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const {loginSystem} = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    console.log(disabled)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        loginSystem(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    


    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
             <Helmet>
                <title>Bestro Boss | Login</title>
            </Helmet>
            <div className='flex justify-center min-h-screen items-center'>
                <div>
                    <img src={loginImage} alt="" />
                </div>
                <div className='w-[35%]'>
                    <form onSubmit={handleLogin} className='space-y-6'>
                        <div className=' flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Email:</label>
                            <input className=' input input-bordered' placeholder='Enter Email' type="email" name="email" />
                        </div>
                        <div className='border p-3 rounded-lg'>
                            <LoadCanvasTemplate />
                        </div>
                        <div>
                            <input ref={captchaRef} placeholder='Type Here' className='w-full input input-bordered' type="captcha" />
                            <button onClick={handleValidate} className='btn btn-xs bt-outline mt-2 w-full'>Validate</button>
                        </div>
                        <div className='flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Password:</label>
                            <input className='input input-bordered' placeholder='Enter your password' type="password" name="password" />
                        </div>
                        <input disabled={disabled} className='btn w-full' type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;