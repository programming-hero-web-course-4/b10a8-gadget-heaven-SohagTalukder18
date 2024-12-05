import React from 'react'

export default function CartList({cart,handleRemoveFromCart}) {

    
    const{product_title,description,price,product_id,product_image}=cart;

    return (

        <div className='flex items-center justify-between bg-slate-200 gap-7 p-4 mb-3 rounded-xl'>
            <div className='flex items-center gap-11'>
                <div className='w-28 h-20 bg-white rounded-xl'><img src={product_image} alt={product_title} /></div>
                <div className='space-y-2'>
                    
                    <p className='text-2xl font-semibold'>{product_id}</p>
                    <p className='text-2xl font-semibold'>{product_title}</p>
                    <p className='text-sm '>{description}</p>
                    <p className='text-xl font-semibold'>price:${price}</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-20'>
                <div onClick={()=>handleRemoveFromCart(product_id)} className='flex justify-center items-center w-5 h-5 border-2 border-red-700 rounded-full p-5 text-red-700 ' ><span className='text-2xl'>x</span></div>
            </div>
        </div>
    )
}
