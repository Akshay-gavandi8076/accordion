import React from 'react'
import { ContentProps } from '../../types/types'

const Content: React.FC<ContentProps> = ({ contentHeight, children }) => (
  <div
    className='overflow-hidden'
    style={{
      maxHeight: `${contentHeight}px`,
      transition: 'max-height 1s cubic-bezier(0.4, 0, 0.2, 1)',
    }}
  >
    <div>{children}</div>
  </div>
)

export default Content
