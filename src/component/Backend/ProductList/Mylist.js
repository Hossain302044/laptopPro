import React from 'react';

const Mylist = ({ product, }) => {
    const { _id, name, image, price, quantity } = product;
    return (
        <>
            <tr>
                <td className="px-4 py-3"> <img alt="team" className="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src={image} /></td>
                <td className="px-4 py-3">{name}</td>
                <td className="px-4 py-3 text-lg text-gray-900">{quantity}</td>
                <td className="px-4 py-3 text-lg text-gray-900">{price}</td>
            </tr>
        </>
    );
};

export default Mylist;