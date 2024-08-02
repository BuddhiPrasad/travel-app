"use client"

import React from 'react'

import { usePathname } from "next/navigation";
import Link from 'next/link';
import CustomButton from './CustomButton';
import { CustonNav } from '@/type/page';

const Links = [
    {path: '/', name:'Home'},
    {path: '/news', name:'News'},
    {path: '/tour-agencies', name:'Tour Agencies'},
    {path: '/tours', name:'Tours'},
    {path: '/about-us', name:'About Us'},
    {path: '/contact-us', name:'Contact Us'},
]

const Nav = ({containerStyle}:CustonNav) => {

    const path = usePathname();
  return (
    <nav className={containerStyle}>
        {Links.map((link, index)=>{
            return <Link href={link.path} key={index} className='hover:text-primary'>{link.name}</Link>;
        })}

        <div className='flex flex-row gap-x-4'>
             <CustomButton title='Sign in' containerStyles='button-main  px-8'/>
             <CustomButton title='Sign up' containerStyles='button-sub  px-8'/> 
            </div>
      
    </nav>
  )
}

export default Nav
