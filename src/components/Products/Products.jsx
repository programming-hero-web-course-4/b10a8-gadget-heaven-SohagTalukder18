import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Product from '../Product/Product';

export default function Products() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('./JsonData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])





    return (
        <div className="min-h-96 ">
            <h1 className='text-center my-11 text-4xl font-semibold'>Explore Cutting-Edge Gadgets</h1>

            <div>
                <Sidebar></Sidebar>
            </div>

        </div>
        
    )
}
