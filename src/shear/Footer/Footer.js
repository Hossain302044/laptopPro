import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className='p-10 bg-primary text-white'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                        <div className='md-5'>
                            <h4 className='text-2xl pb-4'>Company</h4>
                            <p className='text-gray-300'>
                                H-202, 3rd Floor, Road- 3/A, Block-B,<br />
                                Shagufta Housing Society, Mirpur DOHS Road.<br />
                                <strong>Phone:</strong> +880 01724-591 912 <br />
                                <strong>Email:</strong> info@laptoppro.com <br />
                            </p>
                        </div>
                        <div className='md-5'>
                            <h4 className='text-2xl pb-4'>Useful link</h4>
                            <ul className='text-gray-300'>
                                <li className='pb-4 flex items-center'><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Home</Link></li>
                                <li className='pb-4 flex  items-center'><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>About Us</Link></li>
                                <li className='pb-4 flex  items-center '><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Services</Link></li>
                                <li className='pb-4 flex  items-center '><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Term & Conditions</Link></li>
                                <li className='pb-4 flex  items-center '><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Privacy Police</Link></li>
                            </ul>
                        </div>
                        <div className='md-5'>
                            <h4 className='text-2xl pb-4'>Our Services</h4>
                            <ul className='text-gray-300'>
                                <li className='pb-4 flex  items-center'><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Appointments</Link></li>
                                <li className='pb-4 flex  items-center' ><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Our CLinic</Link></li>
                                <li className='pb-4 flex  items-center' ><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Careers</Link></li>
                                <li className='pb-4 flex  items-center'><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>FAQ</Link></li>
                                <li className='pb-4 flex  items-center' ><ChevronRightIcon className="h-5 w-5 text-cyan-400"></ChevronRightIcon><Link to='/' className='hover:text-cyan-400'>Portfolio</Link></li>
                            </ul>
                        </div>
                        <div className='md-5 space-y-3'>
                            <h4 className='text-2xl pb-4'>Join Our Newsletter</h4>
                            <p className='text-gray-300'>Join 2500+ others and never miss out on new tips.</p>
                            <form action="" className='flex flex-row flex-wrap'>
                                <input type="text" className=' text-gray-500 w-2/3 p-2 focus:outline-none focus:border-cyan-400 border-2' placeholder='example@gmail.com' />
                                <button className='p-2 w-1/3 bg-cyan-400 text-white hover:bg-cyan-600 outline-none'>subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-footer px-10 py-2'>
                <div className='text-center text-gray-500'>
                    &copy; copyright <strong>Laptop<span className='text-cyan-400'>Pro</span></strong>. All Right Reserve.
                </div>
            </div>
        </div>
    );
};

export default Footer;