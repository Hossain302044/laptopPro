import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProduct from './AllProduct';
const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const DeleteToProduct = id => {
        const proceed = window.confirm('are you sure we want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/allproducts/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className=" px-5 py-24 flex justify-center items-center">
                        <Link to='/addproducts' className='bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded'>Add Products</Link>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map(product => <AllProduct
                                key={product._id}
                                product={product}
                                DeleteToProduct={DeleteToProduct}
                            ></AllProduct>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllProducts;