import React from 'react';
import loginImage from '../../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div>
            <Helmet>
                <title>Bestro Boss | SignUp</title>
            </Helmet>
            <div className='flex lg:flex-row-reverse justify-center min-h-screen items-center'>
                <div>
                    <img src={loginImage} alt="" />
                </div>
                <div className='w-[35%]'>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                        <div className=' flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Name:</label>
                            <input
                                {...register("name",
                                    { required: true })}
                                className=' input input-bordered'
                                placeholder='Enter Name'
                                type="name"
                                name="name" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className=' flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Email:</label>
                            <input {...register("email",
                                { required: true })}
                                className=' input input-bordered'
                                placeholder='Enter Email'
                                type="email"
                                name="email" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex space-y-2 flex-col justify-center'>
                            <label htmlFor="">Password:</label>
                            <input
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                className='input input-bordered'
                                placeholder='Enter your password'
                                type="password"
                                name="password" />
                            {errors.password?.type === "required" && (
                                <p className='text-red-500'>Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-500'>Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-500'>Password must have one UpperCase one LowerCase, one number and one special character</p>
                            )}

                        </div>
                        <input className='btn w-full' type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;