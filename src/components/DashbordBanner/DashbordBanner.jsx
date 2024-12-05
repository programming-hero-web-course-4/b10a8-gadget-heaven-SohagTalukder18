import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom'
import { getStoreAddToCart,getStoreWishList, removeFromLS, removeFromWishLS } from '../../utlitity/AddToDb';
import CartList from '../CartList/CartList';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import Products from './../Products/Products';

export default function DashbordBanner() {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allProducts = useLoaderData();
   

    useEffect(() => {
        const storedAddToCard = getStoreAddToCart();
        const storedAddToCardInt = storedAddToCard.map(id => parseInt(id));
    
        const addToCartList = allProducts.filter(product => 
            storedAddToCardInt.includes(product.product_id)
        );
    
        
        setCartList(addToCartList);
        
    }, [allProducts]); 
    
    useEffect(() => {
        const storedWishList = getStoreWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const addToWishList = allProducts.filter(product => storedWishListInt.includes(product.product_id));
        setWishList(addToWishList);

    }, [allProducts])
    

    const tprice = cartList.map(price => price.price );
    const tprice1 = tprice.map(price => price);

    let totalPrice = 0;
    for(let a of tprice1){
        totalPrice += a;
       
    }
    

    // Sort cart in ascending order by price
    const sortCartByPriceAscending = () => {
        const sortedCart = [...cartList].sort((a, b) => a.price - b.price); 
        setCartList(sortedCart);
    };
   

    const handleRemoveFromCart = id =>{
        
        const remainingCart = cartList.filter(cart => cart.product_id !== id);
       console.log(remainingCart,"remove");
       
        const idx=id.toString();

        setCartList(remainingCart);
        removeFromLS(idx);
        
    }
    const handleRemoveFromWishList = id =>{
        
        const remainingCart = wishList.filter(cart => cart.product_id !== id);
        
        const idx=id.toString();
        setWishList(remainingCart);
        removeFromWishLS(idx);
       
    }

   






    return (
        <div className=' pb-6'>

            <div className=' '>
                <div className='bg-purple-900 py-7'>
                    <h1 className='text-4xl font-bold text-white text-center'>Dashboard</h1>
                    <p className='text-base text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                  
                </div>
                <div>

                    <Tabs>
                        <TabList className={`text-center flex flex-row justify-center gap-3 bg-purple-900 py-7`}>
                            <Tab>Cart</Tab>
                            <Tab>Wishlist</Tab>
                        </TabList>

                        <TabPanel className={`max-w-5xl mx-auto`}>
                            <Cart sortCartByPriceAscending={sortCartByPriceAscending} totalPrice={totalPrice} setCartList={setCartList}></Cart>
                            <h2>cart:{cartList.length}</h2>
                            {
                                cartList.map(cart => <CartList key={cart.product_id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}></CartList>)
                            }
                        </TabPanel>
                        <TabPanel className={`max-w-5xl mx-auto`}>
                            <h2>WishList:{wishList.length}</h2>
                            {
                                wishList.map(wish => <Wishlist key={wish.product_id} wish={wish} handleRemoveFromWishList={handleRemoveFromWishList} cartList={cartList}  setCartList={setCartList}></Wishlist>)
                                
                                
                            }
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        </div>
    )
}
