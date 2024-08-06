import { tourcounties } from '@/schema/page'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const CounteryCard = () => {
  return (


    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 items-center justify-center gap-8 '>
      {tourcounties.map((item, index)=>{
        return <div key={index} className='relative h-102 rounded-[30px]'>
          
              <Image src={item.image} alt='{item.name}' className='rounded-[30px] mb-4 h-full object-cover'/>
              <div className='m-4'>
                <h1 className='mb-4 text-xl font-bold'>{item.name}</h1>
                <p className='p mb-4'>{item.description}</p>
                <Button className='rounded-full px-6'>See more...</Button>
              </div>
              
         
           
          </div>
      })}
    </div>
  )
}

export default CounteryCard
