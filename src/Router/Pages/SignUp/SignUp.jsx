import React from 'react';
import loginImage from '../../../assets/others/authentication2.png'

const SignUp = () => {
    return (
        <div>
            <div className='flex lg:flex-row-reverse justify-center min-h-screen items-center'>
                <div>
                    <img src={loginImage} alt="" />
                </div>
                <div className='w-[35%]'>
                    <form  className='space-y-6'>
                        <div className=' flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Name:</label>
                            <input className=' input input-bordered' placeholder='Enter Name' type="name" name="name" />
                        </div>
                        <div className=' flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Email:</label>
                            <input  className=' input input-bordered' placeholder='Enter Email' type="email" name="email" />
                        </div>
                        <div className='flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Password:</label>
                            <input className='input input-bordered' placeholder='Enter your password' type="password" name="password" />
                        </div>
                        <input className='btn w-full' type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;