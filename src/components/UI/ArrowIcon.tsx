// FAQItemArrow.tsx
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { ArrowIconProps } from '../../types/types'

const ArrowIcon: React.FC<ArrowIconProps> = ({ arrowRotation }) => (
  <div className='text-lg'>
    <FaChevronDown
      className='text-blue-500 transition-transform text-lg sm:text-lg md:text-xl lg:text-2xl'
      style={{ transform: `rotate(${arrowRotation}deg)` }}
    />
  </div>
)

export default ArrowIcon
