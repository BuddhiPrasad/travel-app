import React from 'react'
import WrapperContainer from './WrapperContainer'
import Image from 'next/image'

import feature from '../public/Features/Feature01.png'
import { Button } from './ui/button'
import { FaPlayCircle, FaShoppingBag } from 'react-icons/fa'

const Feature01 = () => {
  return (
    <section className='pt-10 pb-10'>
        <WrapperContainer>
        <div className='flex flex-col xl:flex-row items-center'>

        <div className='flex w-full justify-center xl:justify-start items-start'>
           
           <div className='w-[600px] xl:w-[800px]'>
             <Image src={feature} alt='feature'/>
           </div>
           
           
         </div>
            


            <div className='flex flex-col xl:flex-row items-center'>
                    <div className='flex flex-col items-center xl:items-start'>
                        <div className='flex items-center gap-x-2 mb-8'>
                            <h1 className='text-sm uppercase font-semibold text-pink-400 tracking-[4px]'>WE ARE THE BEST FOR YOU</h1>
                        </div>
                    <div className='section-title'>
                            <h1 className='text-center xl:text-left mb-4'>Unlock Your Dream Destination</h1>
                    </div>
                        <p className='p text-center xl:text-left max-w-[500px] mb-8'>We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</p>
                    
                   

                      <div className='flex gap-x-4 justify-between mb-4 w-full'>
                        <div className='border border-border p-4 flex flex-col items-center justify-center w-full'>
                          <h1 className='section-title text-pink-400'>4k+</h1>
                          <p className='text-sm'>Satisfied Customers</p>
                        </div>

                        <div className='border border-border p-4 flex flex-col items-center justify-center w-full'>
                          <h1 className='section-title text-pink-400'>1000+</h1>
                          <p className='text-sm'>Global Destinations</p>
                        </div>
                      </div>

                      <div className='flex gap-x-4 justify-between mb-4 w-full'>
                        <div className='border border-border p-4 flex flex-col items-center justify-center w-full'>
                            <h1 className='section-title text-pink-400'>24/7</h1>
                            <p className='text-sm'>Customer Support</p>
                        </div>

                        <div className='border border-border p-4 flex flex-col items-center justify-centers w-full'>
                          <h1 className='section-title text-pink-400'>100%</h1>
                          <p className='text-sm'>Dedication</p>
                        </div>
                      </div>
                    
                </div>
            </div> 

            </div>
           
        </WrapperContainer>
      
    </section>
  )
}

export default Feature01
