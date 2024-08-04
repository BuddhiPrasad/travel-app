"use client"

import React from 'react'

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { CustonNav } from '@/type/page';
import { Button } from './ui/button';

const Links = [
    {path: '/', name:'Home'},
    {path: '/destinations', name:'Destinations'},
    {path: '/packages', name:'Packages'},
    {path: '/blog', name:'Blog'},
    {path: '/about', name:'About'},
    {path: '/contact', name:'Contact'},
]

const Nav = ({containerStyle}:CustonNav) => {

    const path = usePathname();
  return (
    <nav className={containerStyle}>
        {Links.map((link, index)=>{
            return <Link href={link.path} key={index} className='hover:text-primary'>{link.name}</Link>;
        })}

        {/*<div className='flex flex-row gap-x-4'>
          <Button className='rounded-[20px] px-8'>Log in</Button>
          <Button className='rounded-[20px] px-8 bg-transparent text-primary border border-primary'>Sign up</Button>
        </div>*/}
      
    </nav>
  )
}

export default Nav
