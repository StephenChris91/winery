
'use client';

import { Badge, Navbar, Dropdown } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";


export function Navigation() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">WINERY</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <div className='icons flex gap-3'>
            <Badge color='gray' icon={FaSearch} className='cursor'/>
            {/* <Badge color='gray' icon={IoCartOutline} className='cursor text-4xl'/> */}
            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <Badge icon={IoCartOutline} color='gray'/>}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Dropdown>
        </div>
        <div className='flex'>
          <Navbar.Link href="/login" passHref>Login</Navbar.Link>/
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
