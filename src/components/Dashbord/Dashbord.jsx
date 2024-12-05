import React from 'react'

import { useLoaderData } from 'react-router-dom'
import DashbordBanner from '../DashbordBanner/DashbordBanner';


export default function Dashbord() {
   const allProductItems = useLoaderData();

  return (
    <div>
        <DashbordBanner></DashbordBanner>
       
    </div>
  )
}
