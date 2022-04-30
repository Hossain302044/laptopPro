import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='Banner-sections flex items-center justify-center'>
            <div className='flex flex-col items-center space-y-6 z-10'>
                <h2 className='font-bold text-5xl flex items-center font-[Poppins] text-primary'>Laptop<span className='text-cyan-400'>Pro</span></h2>
                <h1 className='font-black text-7xl flex items-center font-[Poppins] text-white'>Inventory Management</h1>
                <p className='font-medium text-2xl flex items-center font-[Poppins] text-gray-300'>Quality and Best Services.</p>
                <button className='bg-cyan-400 hover:bg-cyan-500 text-white text-2xl font-bold py-2 px-4 rounded'>More Services</button>
            </div>
        </div >
    );
};

export default Banner;