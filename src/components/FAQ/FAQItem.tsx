// FAQItem.tsx
import React, { useRef, useEffect, useState } from 'react'
import { FAQItemProps } from '../../types/types'
import Header from '../UI/Header'
import Content from '../UI/Content'

const FAQItem: React.FC<FAQItemProps> = ({
  title,
  body,
  showAnswer,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number | null>(null)
  const [arrowRotation, setArrowRotation] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(showAnswer ? contentRef.current.scrollHeight : 0)
    }
    setArrowRotation(showAnswer ? 180 : 0)
  }, [showAnswer])

  return (
    <div className='p-4'>
      <Header
        title={title}
        arrowRotation={arrowRotation}
        onClick={onClick}
      />
      <Content contentHeight={contentHeight}>
        <div ref={contentRef}>
          <p className='mt-2 text-zinc-700 text-base sm:text-base md:text-lg lg:text-xl bg-white p-2 mr-5 rounded'>
            {body}
          </p>
        </div>
      </Content>
    </div>
  )
}

export default FAQItem
