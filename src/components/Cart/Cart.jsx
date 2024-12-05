import React from 'react'
import purchaseIcon from './Group.png'
import { NavLink, useNavigate } from 'react-router-dom';
// import purchaseIcon from '../Cart/Gro'
// import BannerImg from '../../assets/banner.jpg'
// const navigate = useNavigate();




export default function Cart({ sortCartByPriceAscending, totalPrice, setCartList }) {
    // console.log( cartList);

    const clearCart1 = () => {
        const a = [];

        localStorage.removeItem('cart-list');

        setCartList(a);
        // navigate('/');
    }
    const modal = document.getElementById('my_modal_5');

    const clearCart = () => {
        modal.showModal();



    };
    return (

        <div className='max-w-5xl mx-auto'>
            <div className='flex justify-between items-center py-6'>
                <div>
                    <h2>Cart</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-2xl font-bold'>Total Cost:${parseFloat(totalPrice.toFixed(2))}</p>
                    <button onClick={sortCartByPriceAscending} className='py-1 px-4 border-2 border-purple-700 rounded-full hover-bg-purple-700'>Sort by Price</button>
                    <button onClick={clearCart} className='bg-purple-800 py-2 px-4 rounded-full text-white'>Purchase</button>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className='w-[400px] h-[400px] '>
                    <div className="modal-box flex flex-col justify-center items-center">
                        <div><img className='w-16 h-15' src={purchaseIcon} alt="purchase Icon" /></div>
                        <p className='text-2xl font-bold'>Payment Successfully</p>
                        <p className="py-1 text-base font-medium text-[#09080F99;]">Thanks for purchasing.</p>
                        <p className='text-base font-medium text-[#09080F99;]'>Total Cost:${parseFloat(totalPrice.toFixed(2))}</p>
                        <div className="modal-action w-full block">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={clearCart1} className="btn w-full"><NavLink to="/">Close</NavLink></button>
                            </form>
                        </div>

                        
                    </div>
                </div>

            </dialog>

        </div>

    )
}
