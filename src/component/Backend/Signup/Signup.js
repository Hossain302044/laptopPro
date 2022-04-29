import React from 'react';
import { Link } from 'react-router-dom';
import google from './../../../img/icon/google.png';


const Signup = () => {

    return (
        <div>
            <main className='min-h-screen flex flex-col items-center justify-center'>
                <div className='max-w-md w-full bg-gray-50 rounded-lg py-10 px-7 shadow-md space-y-7'>
                    <h1 className='font-bold text-3xl mb-3 flex justify-center'>Register Account</h1>
                    <form className='space-y-7'>
                        <div className='flex flex-col'>
                            <label for='name' className='mb-1 text-sm'>User Name</label>
                            <input className='border rounded-md px-3 py-2' type="text" name='name' id='name' placeholder='Enter your Name' />
                        </div>
                        <div className='flex flex-col'>
                            <label for='email' className='mb-1 text-sm'>Email Address</label>
                            <input className='border rounded-md px-3 py-2' type="text" name='email' id='email' placeholder='Enter your Email Address' />
                        </div>
                        <div className='flex flex-col'>
                            <label for='password' className='mb-1 text-sm'>Password</label>
                            <input className='border rounded-md px-3 py-2' type="password" name='password' id='password' placeholder='Enter your Password' />
                        </div>
                        <div>
                            <input className='w-full rounded-md bg-primary text-white py-2' type="button" value="Log In" />
                        </div>
                        <div className='flex justify-center text-sm'>
                            <p>If you have an<Link to='/login' className='text-cyan-400'> Account?</Link></p>
                        </div>
                        <div className='relative pb-6'>
                            <div className='absolute top-0 lef-0 w-full border'></div>
                            <div className="absolute -top-3 left-0 w-full text-center">
                                <span className='bg-gray-50 px-3'>or continue via</span>
                            </div>
                        </div>
                        <div>
                            <button className='w-full border border-primary rounded-md  text-primary py-2 flex justify-center items-center hover:bg-primary hover:text-white'><img src={google} alt="" />google</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Signup;