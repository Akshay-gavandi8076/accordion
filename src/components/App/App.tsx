import React from 'react'
import FAQList from '../FAQ/FAQList'

const App: React.FC = () => {
  return (
    <div>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 '
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] '
        />
      </div>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mt-16 flow-root sm:mt-24'>
          <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:m-4 lg:rounded-2xl lg:p-4'>
            <div className='container mx-auto p-4'>
              <div className='mb-8 mt-10 flex flex-col items-center '>
                <h1 className='max-w-3xl font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 justify-center text-center'>
                  Frequently Asked Questions
                </h1>
                <div className=' p-4'>
                  <FAQList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 '
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] '
        />
      </div>
    </div>
  )
}

export default App
