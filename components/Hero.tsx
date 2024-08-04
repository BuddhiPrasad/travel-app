import React from 'react'
import WrapperContainer from './WrapperContainer'
import Image from 'next/image'

import { FaShoppingBag, FaPlayCircle  } from "react-icons/fa";
import { Button } from './ui/button';

import hero01 from '../public/hero 01.png'
import hero02 from '../public/hero 02.png'
import hero03 from '../public/hero 03.png'

const Hero = () => {
  return (
    <section className='h-[120vh] lg:h-[80vh] pt-10'>
        <WrapperContainer >
          <div className='flex flex-col xl:flex-row items-center'>
            <div className='flex flex-col items-center xl:items-start'>
            <div className='flex items-center gap-x-2 mb-12'>
              <h1 className='text-sm uppercase font-semibold text-primary tracking-[4px]'>Explore the world!</h1>
              <FaShoppingBag className='text-pink-500 tracking-[4px]'/>
            </div>
            <div className='text-6xl font-bold text-center xl:text-left max-w-[380px] mb-12'>
              <h1>Travel <span className='text-pink-500'>top destination</span> of the world</h1>
            </div>
            <p className='text-center xl:text-left max-w-[380px] mb-12'>Where adventure meets comfort. We create unforgettable travel experiences</p>
            <div className='flex gap-x-4'>
              <Button className='rounded-full'>Get Started</Button>
              <Button className='rounded-full'><FaPlayCircle className='mr-2'/>watch Demo</Button>
            </div>
          </div>

          <div className='flex w-full justify-center items-center'>
             <div className='absolute w-[700px]'>
                <Image src={hero02} alt='hero01'/>
              </div>
              <div className='relative w-[350px]'>
                <Image src={hero01} alt='hero01'/>
              </div>
              <div className='absolute'>
                <Image src={hero03} alt='hero01'/>
              </div>
          </div>
          </div>
          
          
        </WrapperContainer>
    </section>
  )
}

export default Hero
