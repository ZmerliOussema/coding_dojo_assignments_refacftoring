import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabButton from './components/TabButton'
import DisplayTab from './components/DisplayTab'

function App() {
  const [tab, setTab] = useState("")

  return (
    <>
      <div className='flex-container'> 
        <TabButton number={1} tab={tab} setTab={setTab}/>
        <TabButton number={2} tab={tab} setTab={setTab}/>
        <TabButton number={3} tab={tab} setTab={setTab}/>
      </div>
      <DisplayTab tab={tab}/>
    </>
  )
}

export default App
