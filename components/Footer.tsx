import React from 'react'
import WrapperContainer from './WrapperContainer'
import Logo from './Logo'
import Social from './Social'

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
        <WrapperContainer>
            <div className='flex flex-col items-center gap-y-6'>
                {/*Logo */}
                <Logo/>
                {/*Social */}
                <Social/>
                {/*Copyright */}
                <div className='text-muted-foreground'>
                    Copyright &copy; Travlog.com. All rights reserved.
                </div>
            </div>
        </WrapperContainer>
      
    </footer>
  )
}

export default Footer
