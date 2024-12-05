import React from 'react'
import { useState, useEffect } from 'react';
import "../ActiveCss/Active.css"
import Product from '../Product/Product';

export default function SidebarButton() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
   


    useEffect(() => {
        
        fetch('./JsonData.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            
                if (data.length > 0 ) {
                    
                    setSelectedCategory(data[data.length-1]);
                  

                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    // console.log(products);



    // Get unique categories from the products data
    const categories = [...new Set(products.map((product) => product.category))];
    // console.log(categories);
    categories.push('all Products');
    
    
    
    // Filter products by selected category
    const filteredProducts = products.filter((product) => product.category === selectedCategory);
    // console.log("Sohag", filteredProducts);


    return (
        <div className="App lg:flex lg:justify-between ">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[24%] mx-auto pb-4  ">
                <div className="col-span-1">

                    {/* Category Buttons */}
                    <div className="flex flex-col items-center gap-2 lg:ml-28">
                        {/* <h1 className="btn btn-active btn-ghost w-36" onClick={() => setSelectedCategory(data)}>Product Categories</h1> */}
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={` w-36 bg-gray-400 ${selectedCategory === category ? 'bg-green-50' : 'bg-green-600'}`}

                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            {/* Product List */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10 w-[74%] mx-auto bg-slate-300 p-5 rounded-xl">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                    
                        <Product product={product} key={product.product_id}></Product>
                    ))
                ) : (
                    
                        products.map(product => <Product product={product} key={product.product_id}></Product>)
                    
                )}

               
               
            </div>
        </div>
    );
}

// 

