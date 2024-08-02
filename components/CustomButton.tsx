import React from 'react'

import { Button } from './ui/button'
import { CustomButtonProps } from '@/type/page'


const CustomButton = ({title, containerStyles, isDisabled, btnType, textStyles, rightIcon}:CustomButtonProps) => {
  return (
    <Button className={containerStyles}>{title}</Button>
  )
}

export default CustomButton
