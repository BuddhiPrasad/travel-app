import React from 'react'
import WrapperContainer from './WrapperContainer'
import Image from 'next/image'

import feature from '../public/Features/Feature02.png'
import { Button } from './ui/button'
import { FaPlayCircle, FaShoppingBag } from 'react-icons/fa'

const Feature02 = () => {
  return (
    <section className='pt-10 pb-10'>
        <WrapperContainer>
        <div className='flex flex-col xl:flex-row items-center'>

        <div className='flex flex-col xl:flex-row items-center'>
                    <div className='flex flex-col items-center xl:items-start'>
                        <div className='flex items-center gap-x-2 mb-8'>
                            <h1 className='text-sm uppercase font-semibold text-pink-400 tracking-[4px]'>Our Experience</h1>
                        </div>
                    <div className='section-title'>
                            <h1 className='text-center xl:text-left mb-4'>Crafting Unforgettable Adventures</h1>
                    </div>
                        <p className='p text-center xl:text-left max-w-[500px] mb-8'>We excel in curating remarkable journeys, specializing in outdoor destinations around the globe. With a wealth of experience, we bring adventures to life and invite you to embark on your own. The call of nature awaits—begin your adventure today!</p>
                    
                   

                      <div className='flex gap-x-4 justify-between mb-4 w-full'>

                        <div className='p-4 flex flex-col w-full'>
                          <h1 className='section-title text-pink-400'>1,000+</h1>
                          <p className='text-sm'>outdoor destinations</p>
                        </div>

                        <div className='p-4 flex flex-col w-full'>
                          <h1 className='section-title text-pink-400'>98%</h1>
                          <p className='text-sm'>customer satisfaction</p>
                        </div>
                        
                        <div className='p-4 flex flex-col w-fulll'>
                          <h1 className='section-title text-pink-400'>15+</h1>
                          <p className='text-sm'>Years Of Experience</p>
                        </div>
                      </div>

                    
                </div>
            </div> 


        <div className='flex w-full justify-center xl:justify-end items-end'>
           
           <div className='w-[600px] xl:w-[800px]'>
             <Image src={feature} alt='feature'/>
           </div>
           
           
         </div>
            


            
            </div>
           
        </WrapperContainer>
      
    </section>
  )
}

export default Feature02
