import React from 'react'
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>

            <Banner></Banner>

            <Products></Products>
        </div>
    )
}
