import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../shear/Loading/Loading';
import google from './../../../img/icon/google.png';


const SocailLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (errorGoogle) {
        errorElement = <div>
            <p className='text-red-700'>{errorGoogle?.message}</p>
        </div>
    }
    if (loadingGoogle) {
        return (
            <>
                <Loading></Loading>
                <div>
                    <button onClick={() => signInWithGoogle()} className='w-full border border-primary rounded-md  text-primary py-2 flex justify-center items-center hover:bg-primary hover:text-white'><img src={google} alt="" />google</button>
                </div>
            </>);
    }
    if (userGoogle) {
        navigate('/home')
    }
    return (
        <div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='w-full border border-primary rounded-md  text-primary py-2 flex justify-center items-center hover:bg-primary hover:text-white'><img src={google} alt="" />google</button>
            </div>
        </div>
    );
};

export default SocailLogin;