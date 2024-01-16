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
