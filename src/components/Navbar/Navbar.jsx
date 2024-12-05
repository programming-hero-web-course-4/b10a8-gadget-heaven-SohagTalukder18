import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import "./Navbar.css"


export default function Navbar() {
    const location = useLocation();
    

    const textColor = location?.pathname !== "/" ? "text-[#263238]" : "text-white";

    const links = <>
        <li
            className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`}
        >
            <NavLink to="/">Home</NavLink>

        </li>
       

        <NavLink
            className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`} to="statistics"
        >
            Statistics
        </NavLink>
        <NavLink
            className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`} to="dashbord"
        >
            Dashboard
        </NavLink>
        <NavLink
            className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`} to="about"
        >
           About
        </NavLink>
    </>

    return (
        <div className={`relative ${location?.pathname !== "/" ? "bg-white" : "bg-purple-600"}`}>
            <div className={` px-10 py-5 flex items-center justify-between`}>
                {/* Logo */}
                <div className="flex items-center gap-2">

                    <h3 className={`text-2xl font-bold ${textColor}`}>Gadget Heaven</h3>
                </div>
           
                {/* Links */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-14">

                        {
                            links
                        }
                    </ul>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <span><MdOutlineShoppingCart className='bg-white p-2 h-10 w-10 rounded-full'></MdOutlineShoppingCart></span>
                    <span> <CiHeart className='bg-white p-2 h-10 w-10 rounded-full'></CiHeart></span>
                    <button className="lg:hidden p-2.5 rounded-md bg-[#4CAF4F] text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* <div className="absolute left-0 right-0 top-full lg:hidden">
          <ul className="flex items-center justify-center gap-10">
            <li
              className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`}
            >
              Home
            </li>
            <li
              className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`}
            >
              About
            </li>
            <li
              className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`}
            >
              Services
            </li>
            <li
              className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`}
            >
              Portfolio
            </li>
            <li
              className={`font-normal hover:font-medium cursor-pointer transition-all ${textColor}`}
            >
              Contact
            </li>
          </ul>
        </div> */}
        </div>
    );
}
