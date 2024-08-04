import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Logo from './Logo'
import Nav from './Nav'
import { AlignJustify } from 'lucide-react'
import Social from './Social'
import CustomButton from './CustomButton'
import { Button } from './ui/button'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo/>
            <Nav containerStyle='flex flex-col items-center gap-y-6'/>
          </div>
          <Button className='rounded-[20px] px-12 bg-transparent text-primary border border-primary dark:text-white dark:border-white '>Get Start</Button>

          <div className='flex flex-col'>
            <Social/>
          </div>
        </div>

        
        
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
