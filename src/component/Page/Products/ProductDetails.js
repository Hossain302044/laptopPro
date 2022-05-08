import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://thawing-badlands-95729.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleToDelivered = id => {
        const updateProducts = parseInt(product.quantity) - 1;
        console.log(updateProducts);
        const url = `https://thawing-badlands-95729.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
            .then(res => res.json())
            .then(result => {
                alert('product Update');
                console.log(result);
            })

    }
    const handleToAddQuantity = id => {
        let newProductQty = prompt("Please Enter Product Quantity Number", "");
        const updateProducts = parseInt(product.quantity) + parseInt(newProductQty);
        console.log(updateProducts);
        const url = `https://thawing-badlands-95729.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateProducts),
        })
            .then(res => res.json())
            .then(result => {
                alert('data update');
                console.log(result);
            })
    }

    return (
        <div >
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
                            <div className="flex mb-4">
                                <div className="flex-grow text-cyan-400 border-b-2 border-cyan-500 py-2 text-lg px-1">Description</div>
                            </div>
                            <p className="leading-relaxed mb-4">{product.Discriptions}</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Supliar name</span>
                                <span className="ml-auto text-gray-900">{product.supliarname}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Quantity</span>
                                <span className="ml-auto text-gray-900">{product.quantity}</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                <button onClick={() => handleToDelivered(id)} className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded">Delivered</button>
                                <button onClick={() => handleToAddQuantity(id)} className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded">Add Quantity</button>
                            </div>
                        </div>

                        <img alt='' className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;