import React, { useRef, useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FAQItemProps } from '../../types/types'

const FAQItem: React.FC<FAQItemProps> = ({
  title,
  body,
  showAnswer,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number | null>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(showAnswer ? contentRef.current.scrollHeight : 0)
    }
  }, [showAnswer])

  const transitionDuration = 1 // Content transition duration in seconds
  const transitionTiming = 'cubic-bezier(0.4, 0, 0.2, 1)' // Easing function

  return (
    <div className='p-4'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={onClick}
      >
        <div>
          <h3 className='text-black text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold'>
            {title}
          </h3>
        </div>
        <div className='text-lg'>
          <FaChevronDown className='text-blue-500 transition-transform text-lg sm:text-lg md:text-xl lg:text-2xl' />
        </div>
      </div>
      <div
        className='overflow-hidden'
        style={{
          maxHeight: `${contentHeight}px`,
          transition: `max-height ${transitionDuration}s ${transitionTiming}`,
        }}
      >
        <div ref={contentRef}>
          <p className='mt-2 text-zinc-700 text-base sm:text-base md:text-lg lg:text-xl bg-white p-2 mr-5 rounded'>
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQItem
