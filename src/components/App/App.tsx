// App.tsx
import React from 'react'
import FAQList from '../FAQ/FAQList'

const App: React.FC = () => {
  return (
    <div>
      <h1 className='max-w-3xl font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 justify-center text-center'>
        Frequently Asked Questions
      </h1>
      <div className=' p-4'>
        <FAQList />
      </div>
    </div>
  )
}

export default App
