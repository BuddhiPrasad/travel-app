import React from 'react'
import WrapperContainer from './WrapperContainer'


import Lot_of_choices from '../public/TopValies/Lot of choices.png'
import Best_Tour_Guide from '../public/TopValies/Best Tour Guide.png'
import Easy_Booking from '../public/TopValies/Easy Booking.png'
import ww22ww from '../public/22ww.webp'
import Image from 'next/image'

const TopValies = () => {
  return (
    <section className='pt-10 pb-10'>
        <WrapperContainer>
            <div className='flex flex-col xl:flex-row'>

                <div className='flex flex-col items-center xl:items-start mb-8'>
                    <h2 className='text-sm uppercase font-semibold text-pink-500 tracking-[4px]'>WHAT WE SERVE</h2>
                    <h1 className='section-title mt-4 xl:max-w-[200px] mb-4'>Top Values For You</h1>
                    <p className='p max-w-[200px] text-center xl:text-left'>Embrace lifes vastness, venture forth,</p>
                </div>

                <div className='flex flex-col xl:flex-row items-center gap-6 w-full justify-around xl:pl-32'>

                    <div className='flex flex-col items-center xl:items-start xl:max-w-[200px]'>
                        <Image src={Lot_of_choices} alt='Lot_of_choices'/>
                        <h3 className='h3 mb-4'>Lot of choices</h3>
                        <p className='p'>Embrace lifes vastness, venture forth,</p>
                    </div>

                    <div className='flex flex-col items-center xl:items-start xl:max-w-[200px]'>
                        <Image src={Best_Tour_Guide} alt='Best_Tour_Guide'/>
                        <h3 className='h3 mb-4'>Best Tour Guide</h3>
                        <p className='p'>Embrace lifes vastness, venture forth,</p>
                    </div>

                    <div className='flex flex-col items-center xl:items-start xl:max-w-[200px]'>
                        <Image src={Easy_Booking} alt='Easy_Booking'/>
                        <h3 className='h3 mb-4'>Easy Booking</h3>
                        <p className='p'>Embrace lifes vastness, venture forth,</p>
                    </div>
                </div>

                
            </div>



            
        </WrapperContainer>
      
    </section>
  )
}

export default TopValies
