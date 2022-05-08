import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    {
                                        products.map(product => <Product
                                            key={product._id}
                                            product={product}
                                        ></Product>)
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 px-5 py-24 mx-auto">
                        <Link to='/addproducts' className='bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded'>Add Products</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllProducts;