import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Mylist from './Mylist';

const ProductList = () => {
    const [products, setProducts] = useState('');
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getMyProducts = async () => {
            const email = user?.email;
            const url = `https://thawing-badlands-95729.herokuapp.com/myproducts?email=${email}`;
            try {
                await fetch(url)
                    .then(res => res.json())
                    .then(data => setProducts(data))
            } catch (error) {
                console.log(error?.message)
            }
        }
        getMyProducts();

    }, [user])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-primary">Product List</h1>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Image</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product => <Mylist
                                        key={product._id}
                                        product={product}
                                    ></Mylist>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ProductList;