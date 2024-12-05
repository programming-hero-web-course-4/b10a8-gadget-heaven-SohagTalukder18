import React from 'react'
import BannerImg from '../../assets/banner.jpg'

export default function Banner() {
    return (
        <div>
            <div className='bg-purple-600 pt-12 pb-44'>
                <div className=' max-w-3xl mx-auto space-y-5'>
                    <h1 className=' text-30xl lg:text-5xl font-bold text-white text-center'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='text-base text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='text-center'>
                        <button className=' bg-white text-[#9538E2] font-semibold py-2 px-3 rounded-full'>Shop Now</button>
                    </div>

                </div>
            </div>
            <div className='max-w-2xl h-96 mt-[-150px] mx-auto p-4 border-2 border-white bg-transparent rounded-2xl'>
                <img className='w-full h-full rounded-2xl bg-transparent' src={BannerImg} alt="" />
            </div>
        </div>
    )
}
