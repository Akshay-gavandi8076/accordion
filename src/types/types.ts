import { ReactNode } from 'react'

export interface FAQDataItem {
  id: number
  title: string
  body: string
  showAnswer: boolean
}

export interface ButtonProps {
  onClick: () => void
}

export interface FAQItemProps extends FAQDataItem {
  onClick: () => void
}

export interface HeaderProps {
  title: string
  arrowRotation: number
  onClick: () => void
}

export interface ArrowIconProps {
  arrowRotation: number
}

export interface ContentProps {
  contentHeight: number | null
  children: ReactNode
}

export interface BackgroundShapeProps {
  className?: string
}
