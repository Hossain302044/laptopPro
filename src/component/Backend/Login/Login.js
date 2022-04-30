import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocailLogin from '../SocailLogin/SocailLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword, user, loadingEmailPass, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    let errorPassEmail;

    if (error) {
        errorPassEmail = <div>
            <p className='text-red-700'>{error?.message}</p>
        </div>
    }

    if (user) {
        navigate('/home')
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('send mail');
        }
    }
    return (
        <div>
            <main className='min-h-screen flex flex-col items-center justify-center'>
                <div className='max-w-md w-full bg-gray-50 rounded-lg py-10 px-7 shadow-md space-y-7'>
                    <h1 className='font-bold text-3xl mb-3 flex justify-center'>Log in to Account</h1>
                    <form className='space-y-7' onSubmit={handleFormSubmit}>
                        <div className='flex flex-col'>
                            <label for='email' className='mb-1 text-sm'>Email Address</label>
                            <input ref={emailRef} className='border rounded-md px-3 py-2' type="text" name='email' id='email' placeholder='Enter your Email Address' />
                        </div>
                        <div className='flex flex-col'>
                            <label for='password' className='mb-1 text-sm'>Password</label>
                            <input ref={passwordRef} className='border rounded-md px-3 py-2' type="password" name='password' id='password' placeholder='Enter your Password' />
                        </div>
                        {errorPassEmail}
                        <div>
                            <input className='w-full rounded-md bg-primary text-white py-2' type="button" value="Log In" />
                        </div>
                        <div className='flex justify-between text-sm'>
                            <p>Create Free<Link to='/signup' className='text-cyan-400'> Account?</Link></p>
                            <button onClick={resetPassword} className='text-cyan-400'>Forgate Password?</button>
                        </div>
                        <div className='relative pb-6'>
                            <div className='absolute top-0 lef-0 w-full border'></div>
                            <div className="absolute -top-3 left-0 w-full text-center">
                                <span className='bg-gray-50 px-3'>or continue via</span>
                            </div>
                        </div>
                        <SocailLogin></SocailLogin>
                    </form>
                </div>
            </main>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;