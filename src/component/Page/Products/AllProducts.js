import React, { useEffect, useState } from 'react';
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
    );
};

export default AllProducts;