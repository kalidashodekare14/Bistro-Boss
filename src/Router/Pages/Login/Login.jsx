import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImage from '../../../assets/others/authentication2.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const { loginSystem } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"
    console.log('kaj hocce', from)

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
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Loggin Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    const handleValidate = e => {
        const user_captcha_value = e.target.value

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
                        <div className='flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Password:</label>
                            <input className='input input-bordered' placeholder='Enter your password' type="password" name="password" />
                        </div>
                        <div className='border p-3 rounded-lg'>
                            <LoadCanvasTemplate />
                        </div>
                        <div>
                            <input onBlur={handleValidate} placeholder='Type Here' className='w-full input input-bordered' type="captcha" />
                        </div>
                        <input disabled={disabled} className='btn w-full' type="submit" value="Login" />
                    </form>
                    <div className='text-center '>
                        <SocialLogin></SocialLogin>
                    </div>
                    <span>Please
                        <Link to="/register" className='text-blue-500'>
                            SingUp
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;