import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Logo from './Logo'
import Nav from './Nav'
import { AlignJustify } from 'lucide-react'
import Social from './Social'
import CustomButton from './CustomButton'

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
          <div className='flex flex-col'>
            <Social/>
          </div>
        </div>

        
        
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
