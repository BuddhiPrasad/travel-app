import React from 'react'
import WrapperContainer from './WrapperContainer'
import Logo from './Logo'
import { ThemeToggler } from './ThemeToggler'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-4 sticky top-0 z-30 transition-all bg-secondary'>
        <WrapperContainer>
            <div className='flex justify-between items-center'>
                {/*Logo */}
                <Logo/>
                <div className='flex items-center gap-x-6'>
                    {/*Nav-Desktop */}
                    <Nav containerStyle='hidden xl:flex gap-x-8 items-center'/>
                    {/*ThemeToggler */}
                    <ThemeToggler/>
                    {/*Nav-Mobile */}
                    <div className='xl:hidden'>
                        <MobileNav/>
                    </div>
                    
                </div>

            </div>
            
        </WrapperContainer>
      
    </header>
  )
}

export default Header
