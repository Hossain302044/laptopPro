import React from 'react';

const ProductList = () => {
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
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Image</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Stock</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3">Start</td>
                                    <td className="px-4 py-3"> <img alt="team" className="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" /></td>
                                    <td className="px-4 py-3">15 GB</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                                    <td className="w-10 text-center">
                                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3"><img alt="team" className="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" /></td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3"><img alt="team" className="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" /></td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"><img alt="team" className="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" /></td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                                    <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ProductList;