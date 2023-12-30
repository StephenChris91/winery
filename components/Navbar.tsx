
'use client';

import { Badge, Navbar, Dropdown } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/features/cartSlice/cartSlice';
import CartDropdown from './CartDropdown';


export function Navigation() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(selectCart);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };


  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">WINERY</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <div className='icons flex gap-3'>
            <Badge color='gray' icon={FaSearch} className='cursor'/>
            <button 
              onClick={toggleCart} 
              className="text-black focus:outline-none"
              >
              <IoCartOutline />
            </button>
            {isCartOpen && <CartDropdown />}
        </div>
        <div className='flex'>
          <Navbar.Link href="/login">Login</Navbar.Link>/
          <Navbar.Link href="/register">Register</Navbar.Link>
        </div>
      </div>
        <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active className=''>
          Home
        </Navbar.Link>
        <Navbar.Link href="/shop">Red Wines</Navbar.Link>
        <Navbar.Link href="/shop">Sparkling Wines</Navbar.Link>
        <Navbar.Link href="/shop">White Wines</Navbar.Link>
        <Navbar.Link href="/shop">Fort Wines</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
