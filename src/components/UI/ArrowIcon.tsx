import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { ArrowIconProps } from '../../types/types'

const transitionDurationArrow = 1 // Arrow rotation duration in seconds
const transitionTiming = 'cubic-bezier(0.4, 0, 0.2, 1)' // Easing function

const ArrowIcon: React.FC<ArrowIconProps> = ({ arrowRotation }) => (
  <div className='text-lg'>
    <FaChevronDown
      className='text-blue-500 transition-transform text-lg sm:text-lg md:text-xl lg:text-2xl'
      style={{
        transform: `rotate(${arrowRotation}deg)`,
        transitionTimingFunction: transitionTiming,
        transitionDuration: `${transitionDurationArrow}s`,
        transformOrigin: 'center',
      }}
    />
  </div>
)

export default ArrowIcon
