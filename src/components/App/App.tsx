import React from 'react'
import FAQList from '../FAQ/FAQList'
import BackgroundShape from '../UI/BackgroundShape'

const App: React.FC = () => {
  return (
    <div className='mx-auto max-w-6xl px-6 lg:px-8'>
      <BackgroundShape className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' />
      <div className='mt-16 flow-root sm:mt-24'>
        <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:m-4 lg:rounded-2xl lg:p-4'>
          <div className='container mx-auto p-4'>
            <div className='mb-8 mt-10 flex flex-col items-center'>
              <h1 className='max-w-3xl font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 justify-center text-center'>
                Frequently Asked Questions
              </h1>
              <div className='p-4'>
                <FAQList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundShape className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' />
    </div>
  )
}

export default App
