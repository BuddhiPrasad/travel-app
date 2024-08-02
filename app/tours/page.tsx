import WrapperContainer from '@/components/WrapperContainer'
import { tourCategory, tourcounties, tourGuides, tourList } from '@/schema/page'
import React from 'react'

const page = () => {
  return (
    <div>
      <WrapperContainer>
        <div className='pb-10'>
          <div className='flex flex-col gap-y-4 items-start'>
          Tours
          ------------------------------
          {tourList.map((item, index)=>{
            return <div key={index}>
              {item.title}
              {item.location}
            </div>
          })}
        </div>

        <div className='flex flex-col gap-y-4 items-end'>
          Categories
          -----------------------------------------
          {tourCategory.map((item, index)=>{
            return <div key={index}>
              {item.name}
            </div>
          })}
        </div>

        <div className='flex flex-col gap-y-4 items-start'>
          tourcounties
          ---------------------
          {tourcounties.map((item, index)=>{
            return <div key={index}>
              {item.name}
            </div>
          })}
        </div>

        <div className='flex flex-col gap-y-4 items-center'>
          tourGuides
          -----------------------------
          {tourGuides.map((item, index)=>{
            return <div>
              {item.name}
            </div>
          })}
        </div>
        </div>
        
        
      </WrapperContainer>
      
    </div>
  )
}

export default page
