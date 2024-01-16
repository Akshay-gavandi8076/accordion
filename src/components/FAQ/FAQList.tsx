import React, { useEffect, useState, useMemo, useCallback } from 'react'
import Button from '../UI/Button'
import { fetchFAQData } from '../../api/api'
import { FAQDataItem } from '../../types/types'
import FAQItem from './FAQItem'

const FAQList: React.FC = () => {
  const [faqData, setFaqData] = useState<FAQDataItem[]>([])
  const [visibleEntries, setVisibleEntries] = useState<number>(10)

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

  useEffect(() => {
    fetchData()
  }, [])

  const toggleAnswer = useCallback((index: number) => {
    setFaqData((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, showAnswer: !item.showAnswer } : item
      )
    )
  }, [])

  const renderFAQItem = useCallback(
    (item: FAQDataItem, index: number) => (
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
    ),
    [toggleAnswer]
  )

  const renderLoadMoreButton = () => (
    <div className='mt-8 flex justify-center'>
      {shouldRenderLoadMoreButton() && <Button onClick={loadMoreEntries} />}
    </div>
  )

  const shouldRenderLoadMoreButton = () => faqData.length > visibleEntries

  const loadMoreEntries = () => {
    setVisibleEntries((prev) => prev + 10)
  }

  const renderedFAQs = useMemo(() => {
    return faqData.slice(0, visibleEntries).map(renderFAQItem)
  }, [faqData, visibleEntries, renderFAQItem])

  return (
    <div>
      {renderedFAQs}
      {renderLoadMoreButton()}
    </div>
  )
}

export default FAQList
