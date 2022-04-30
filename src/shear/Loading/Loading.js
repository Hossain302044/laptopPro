import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-full h-200 px-5'>
            <div className='p-10 transition-all duration-500'>
                <div className='flex flex-col items-center text-gray-500'>
                    <span className='block w-24 h-24 border-4 rounded-full shadow border-t-black animate-spin'></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;