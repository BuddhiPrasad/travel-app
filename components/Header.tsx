import React from 'react'
import WrapperContainer from './WrapperContainer'
import Logo from './Logo'
import { ThemeToggler } from './ThemeToggler'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='py-4 sticky top-0 z-30 transition-all border-b bg-secondary'>
        <WrapperContainer>
            <div className='flex justify-between items-center'>
                {/*Logo */}
                <Logo/>
                <div>
                    {/*Nav-Desktop */}
                    <Nav containerStyle='hidden xl:flex gap-x-8 items-center'/>
                </div>
                <div className='flex items-center gap-x-6'>
                    
                    <div className='hidden xl:flex gap-x-4 '>
                        <Button className='rounded-[20px] px-8'>Log in</Button>
                        <Button className='rounded-[20px] px-8 bg-transparent text-primary border border-primary'>Sign up</Button>
                    </div>
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
