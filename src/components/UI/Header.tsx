import React from 'react'
import ArrowIcon from './ArrowIcon'
import { HeaderProps } from '../../types/types'

const Header: React.FC<HeaderProps> = ({ title, arrowRotation, onClick }) => (
  <div
    className='flex justify-between items-center cursor-pointer'
    onClick={onClick}
  >
    <div>
      <h3 className='text-black text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold'>
        {title}
      </h3>
    </div>
    <ArrowIcon arrowRotation={arrowRotation} />
  </div>
)

export default Header
