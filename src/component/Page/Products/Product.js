import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (prop) => {
    const { _id, name, image, price, quantity } = prop.product;
    const navigate = useNavigate();

    const navigateToAddToCart = id => {
        navigate(`/products/${id}`);
    }
    return (
        <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className='border-2 border-gray-200 border-opacity-60 rounded-lg p-5'>
                <div className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
                </div>
                <div className="mt-4">
                    {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{supliarname}</h3> */}
                    <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    <div>
                        <p className="mt-1">${price}</p>
                        <p className="mt-1">Stock :{quantity}pcs</p>
                    </div>
                    <button onClick={() => navigateToAddToCart(_id)} className="bg-primary hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-5">
                        Update Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;