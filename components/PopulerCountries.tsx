import React from 'react'
import WrapperContainer from './WrapperContainer'
import CounteryCard from './CounteryCard'

const PopulerCountries = () => {
  return (
    <section className='pt-10 pb-10'>
        <WrapperContainer>
            <div>
                <div className='flex flex-col items-center xl:items-start mb-8'>
                    <h2 className='text-sm uppercase font-semibold text-pink-500 tracking-[4px]'>Top Destination</h2>
                    <h1 className='section-title mt-4 mb-4'>Explore top destination</h1>
                </div>

                <div>
                    <CounteryCard/>
                </div>
            </div>
        </WrapperContainer>
      
    </section>
  )
}

export default PopulerCountries
