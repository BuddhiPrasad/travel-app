import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='text-2xl font-semibold'>
      Travel<span className='font-bold text-blue-600'>trix</span>
    </Link>
  )
}

export default Logo
