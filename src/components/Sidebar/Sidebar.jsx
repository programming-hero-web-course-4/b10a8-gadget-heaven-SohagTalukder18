import React from 'react'
import SidebarButton from '../SidebarButton/SidebarButton'
import Product from './../Product/Product';

export default function Sidebar() {
    // console.log(Product);
    
  return (
    <div className="p-4">
    <div className="flex flex-col gap-2">
        <SidebarButton></SidebarButton>
    </div>
</div>

  )
}

