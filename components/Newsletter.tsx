import React from 'react'
import WrapperContainer from './WrapperContainer'

const Newsletter = () => {
  return (
    <section className='pt-10 pb-10'>
        <WrapperContainer>
            <div className='flex items-center justify-center  bg-yellow-400 rounded-xl'>
                <div className='flex flex-col m-12 items-center'>
                    <h1 className='section-title text-center mb-4'>Sign up to our newsletter</h1>
                    <p className='text-sm text-center xl:max-w-[300px] '>Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</p>
                </div>
            </div>
        </WrapperContainer>
      
    </section>
  )
}

export default Newsletter
