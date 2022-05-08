import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';

const Addproduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div>
            <section className="text-gray-600 body-font relative mt-20 pt-15 md:mt-0">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form className="flex flex-wrap -m-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="supplierName" className="leading-7 text-sm text-gray-600">Supplier Name</label>
                                    <input type="text" id="supplierName" name="supplierName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register("supliarname", { required: true })} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={user?.email} {...register("email")} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="productName" className="leading-7 text-sm text-gray-600">Product Name</label>
                                    <input type="text" id="productName" name="productName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register("name", { required: true })} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="PhotoUrl" className="leading-7 text-sm text-gray-600">Photo Url</label>
                                    <input type="text" id="PhotoUrl" name="PhotoUrl" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register("image", { required: true })} />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="price" className="leading-7 text-sm text-gray-600">Price</label>
                                    <input type="text" id="price" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register("price", { required: true })} />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="quantity" className="leading-7 text-sm text-gray-600">Quantity</label>
                                    <input type="text" id="quantity" name="quantity" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register("quantity", { required: true })} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="description" className="leading-7 text-sm text-gray-600">Description</label>
                                    <textarea id="description" name="description" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" {...register("Discriptions", { required: true })}></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <input type='submit' className="flex mx-auto text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded text-lg" value='Add Product' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Addproduct;