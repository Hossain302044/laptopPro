import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocailLogin from '../SocailLogin/SocailLogin';



const Signup = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, errorEmailPass,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setError('your password do not match!');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <main className='min-h-screen flex flex-col items-center justify-center'>
                <div className='max-w-md w-full bg-gray-50 rounded-lg py-10 px-7 shadow-md space-y-7'>
                    <h1 className='font-bold text-3xl mb-3 flex justify-center'>Register Account</h1>
                    <form className='space-y-7' onSubmit={handleCreateUser}>
                        <div className='flex flex-col'>
                            <label for='name' className='mb-1 text-sm'>User Name</label>
                            <input ref={nameRef} className='border rounded-md px-3 py-2' type="text" name='name' id='name' placeholder='Enter your Name' />
                        </div>
                        <div className='flex flex-col'>
                            <label for='email' className='mb-1 text-sm'>Email Address</label>
                            <input ref={emailRef} className='border rounded-md px-3 py-2' type="text" name='email' id='email' placeholder='Enter your Email Address' />
                        </div>
                        <div className='flex flex-col'>
                            <label for='password' className='mb-1 text-sm'>Password</label>
                            <input ref={passwordRef} className='border rounded-md px-3 py-2' type="password" name='password' id='password' placeholder='Enter your Password' />
                        </div>
                        <div className='flex flex-col'>
                            <label for='confirm-password' className='mb-1 text-sm'>Confirm Password</label>
                            <input ref={confirmPasswordRef} className='border rounded-md px-3 py-2' type="password" name='confirm-password' id='confirm-password' placeholder='Enter your Confirm Password' />
                        </div>
                        <div>
                            <p className='text-red-600'>{error}</p>
                        </div>
                        <div>
                            <input className='w-full rounded-md bg-primary text-white py-2 cursor-pointer' type='submit' value="Log In" />
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
                        <SocailLogin></SocailLogin>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Signup;