import React from 'react'
import { addToStoreAddToCart } from '../../utlitity/AddToDb';

export default function Wishlist({wish,handleRemoveFromWishList,cartList,setCartList}) {

   
    const { product_title, description, price,product_id,product_image } = wish;
  
    
    


    const handleAddToCart = (id) => {
      
        const idx=id.toString();
        
        addToStoreAddToCart(idx);
        
       

    }
    return (
        <div className='max-w-5xl mx-auto mt-9'>
            <div className='flex items-center justify-between bg-slate-200 gap-7 p-4 rounded-xl mb-5'>
                <div className='flex items-center gap-11'>
                    <div className='w-28 h-20 bg-white rounded-xl'><img src={product_image} alt="product_title" /></div>
                    <div className='space-y-1'>
                        <p className='text-2xl font-semibold'>{product_title}</p>
                        <p className='text-sm '>{description}</p>
                        <p className='text-xl font-semibold'>price:${price}</p>
                        <button onClick={() => handleAddToCart(product_id)} className='bg-purple-900 py-2 px-3 rounded-full text-white'>Add to Cart</button>
                    </div>
                </div>
                <div className='flex justify-center items-center w-20'>
                    <div onClick={()=>handleRemoveFromWishList(product_id)} className='flex justify-center items-center w-5 h-5 border-2 border-red-700 rounded-full p-5 text-red-700 cursor-pointer '><span className='text-2xl'>x</span></div>
                </div>
            </div>
        </div>
    )
}
