// FAQList.tsx
import React, { useEffect, useState } from 'react'
import FAQItem from './FAQItem'
import Button from '../Button/Button'
import { fetchFAQData } from '../../api/api'
import { FAQDataItem } from '../../types/types'

const FAQList: React.FC = () => {
  const [faqData, setFaqData] = useState<FAQDataItem[]>([])
  const [visibleEntries, setVisibleEntries] = useState<number>(10)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFAQData()
        const itemsWithAnswer: FAQDataItem[] = data.map((item: any) => ({
          ...item,
          showAnswer: false,
        }))
        setFaqData(itemsWithAnswer)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const toggleAnswer = (index: number) => {
    const updatedData = faqData.map((item, idx) =>
      idx === index ? { ...item, showAnswer: !item.showAnswer } : item
    )
    setFaqData(updatedData)
  }

  const loadMoreEntries = () => {
    setVisibleEntries((prev) => prev + 10)
  }

  const renderedFAQs = faqData.slice(0, visibleEntries).map((item, index) => (
    <div
      key={item.id}
      className='bg-white rounded-lg shadow-md mb-4'
    >
      <FAQItem
        id={item.id}
        title={item.title}
        body={item.body}
        showAnswer={item.showAnswer}
        onClick={() => toggleAnswer(index)}
      />
    </div>
  ))

  const shouldRenderLoadMoreButton = faqData.length > visibleEntries

  return (
    <div>
      {renderedFAQs}
      <div className='mt-8 flex justify-center'>
        {shouldRenderLoadMoreButton && <Button onClick={loadMoreEntries} />}
      </div>
    </div>
  )
}

export default FAQList
