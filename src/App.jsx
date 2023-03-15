import { useState } from 'react'
import { Home } from './component/Home'

function App() {
  return (
    <>
      <div className='flex flex-col m-auto justify-center items-center h-screen'>
        <div className='flex flex-col justify-start items-start'>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
