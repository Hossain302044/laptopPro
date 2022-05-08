import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Nav = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <header className="text-gray-600 body-font shadow-md w-full bg-white fixed top-0 left-0 z-20">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-primary'>
                            Laptop
                            <span className='text-cyan-400'>Pro</span>
                        </div>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</Link>
                        <Link to='/about-us' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">About Us</Link>
                        <Link to='/blog' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Blog</Link>
                        <Link to='/contact-us' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Contact Us</Link>
                    </nav>
                    <div className="inline-flex items-center  mt-4 md:mt-0">
                        {!user ?
                            <>
                                <Link to='/login' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Login</Link>
                                <Link to='/signup' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Sign up</Link>
                            </>

                            :
                            <>
                                <Link to='/products' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Manage Products</Link>
                                <Link to='/addproducts' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Add Products</Link>
                                <Link to='/productlist' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">My List</Link>
                                <button onClick={handleSignOut} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Sign Out</button>

                            </>

                        }
                    </div>
                </div>
            </header>
            <div className=''>
                <div className='container mx-auto'>

                </div>
            </div>
        </>
    );
};

export default Nav;