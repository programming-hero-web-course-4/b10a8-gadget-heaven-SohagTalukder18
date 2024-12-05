import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Product({ product }) {
    const {product_title, category,product_id,price,product_image} = product;
    const navigate = useNavigate();
    
    
    return (
        <div className="bg-slate-400 p-4 shadow-md rounded-xl">
            <div className="w-full h-32 bg-white rounded-xl"><img src={product_image} alt={product_title} /></div>
            <h2>{product_title}</h2>
            <p>{price}$</p>

            <button className="border-purple-700 border-2 py-2 px-4 rounded-full text-blue-700" onClick={() => navigate(`/products/${product_id}`)}>View Details</button>
        </div>
    )
}
