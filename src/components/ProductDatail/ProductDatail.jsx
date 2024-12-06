import React from 'react'
import { useLoaderData, useParams,NavLink } from 'react-router-dom'
import { addToStoreAddToCart, addToStoredWishList } from '../../utlitity/AddToDb';
import { CiHeart } from "react-icons/ci";


export default function ProductDatail() {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    const product = data.find(product => product.product_id === id);
    const { rating, product_title, price, availability, description, Specification,product_image } = product;

    const entriesArray = Object.entries(Specification);

    const handleAddToCart = (id) => {
        addToStoreAddToCart(id)

    }
    const handleWishList = (id) => {

        addToStoredWishList(id)

    }



    return (

        <div className='pb-16'>
            <div className='bg-purple-600 pt-6 pb-36'>
                <div className=' max-w-3xl mx-auto space-y-5 '>
                    <h1 className='text-4xl font-bold text-white text-center'>Product Datails</h1>
                    <p className='text-base text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>


                </div>
            </div>

            <div className='max-w-2xl h-96 mt-[-130px] mx-auto  border-2  bg-white rounded-2xl '>

                <div className="card card-side w-full h-full  shadow-xl items-center">
                    <div className='w-[30%]'>
                        <img className='p-3'
                            src={product_image}
                            alt={product_title} />
                    </div>
                    <div className="ml-8 space-y-2 w-[65%]">
                        <h2 className="card-title">{product_title}</h2>
                        <p>Price: $ {price}</p>
                        <button className="border-2 border-green-400 py-2 px-4 rounded-lg btn-outline btn-success">{`${availability === true ? "In Stock" : "Stock Out"}`}</button>
                        <p>{description}</p>
                        <p className='text-xl font-bold'>Specification:</p>
                        <ol className='list-decimal ml-6'>
                            {
                                entriesArray.map((spe, i) => <li key={i}>{spe}</li>)
                            }
                        </ol>

                        <div className='flex items-center gap-2'>
                            <button onClick={() => handleAddToCart(product_id)} className='bg-purple-900 py-2 px-3 rounded-full text-white'><NavLink to="/">Add to Cart</NavLink></button>

        
                            <CiHeart onClick={() => handleWishList(product_id)} className='bg-white p-2 h-10 w-10 rounded-full'></CiHeart>

                            
                        </div>




                    </div>
                </div>

            </div>

        </div>
    )
}

