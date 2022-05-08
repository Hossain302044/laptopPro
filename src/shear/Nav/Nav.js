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
        <div className='shadow-md w-full bg-white fixed top-0 left-0 z-20'>
            <div className='container mx-auto'>
                <nav className="md:flex bg-white justify-between py-4">
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-primary'>
                        Laptop
                        <span className='text-cyan-400'>Pro</span>
                    </div>
                    <div>
                        <Link to='/' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</Link>
                        <Link to='/products' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Products</Link>
                        <Link to='/about-us' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">About Us</Link>
                        <Link to='/blog' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Blog</Link>
                        <Link to='/contact-us' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Contact Us</Link>
                        {/* {[
                            ['Home', '/'],
                            ['Products', '/products'],
                            ['About Us', '/about-us'],
                            ['Blog', '/blog'],
                            ['Contact Us', '/contact-us'],
                        ].map(([title, url]) => (
                            <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                        ))} */}
                    </div>
                    <div>
                        {!user ?
                            <>
                                <Link to='/login' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Login</Link>
                                <Link to='/signup' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Sign up</Link>
                            </>
                            // [
                            //     ['Login', '/login'],
                            //     ['Sign up', '/signup'],
                            // ].map(([title, url]) => (
                            //     <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                            // ))
                            :
                            <>
                                <Link to='/addproducts' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Add Products</Link>
                                <Link to='/productlist' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Product List</Link>
                                <button onClick={handleSignOut} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Sign Out</button>
                                {
                                    // [
                                    //     ['Add Products', '/addproducts'],
                                    //     ['Product List', '/productlist'],
                                    // ].map(([title, url]) => (
                                    //     <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                                    // ))
                                }
                            </>

                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;