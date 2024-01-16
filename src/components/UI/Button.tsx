import React from 'react'
import { ButtonProps } from '../../types/types'

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-base sm:text-sm md:text-lg lg:text-xl py-2 px-4 rounded'
      onClick={onClick}
    >
      Load More
    </button>
  )
}

export default Button
