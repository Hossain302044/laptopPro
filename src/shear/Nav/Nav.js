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
                        {[
                            ['Home', '/'],
                            ['Products', '/products'],
                            ['About Us', '/about-us'],
                            ['Blog', '/blog'],
                            ['Contact Us', '/contact-us'],
                        ].map(([title, url]) => (
                            <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                        ))}
                    </div>
                    <div>
                        {!user ? [
                            ['Login', '/login'],
                            ['Sign up', '/signup'],
                        ].map(([title, url]) => (
                            <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                        ))
                            : [
                                ['Sign Out'],
                            ].map(([title]) => (
                                <button onClick={handleSignOut} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</button>
                            ))
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;