import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body/Body'
import LeftSidebar from './components/leftSidebar/LeftSidebar'
import RightSidebar from './components/rightSidebar/RightSidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-[#333] w-screen h-screen flex items-start justify-between flex-nowrap gap-4 p-10 transition delay-150 duration-300 ease-in-out container'>
        <LeftSidebar/>
        <Body/>
        <RightSidebar/>
      </div>
  )
}

export default App
