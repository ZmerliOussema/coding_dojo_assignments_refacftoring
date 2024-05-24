import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import SubContent from './components/SubContent'
import Advertisement from './components/Advertisement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header/>
      <div className='flexBox'>
        <Navigation/>
        <Main>
          <SubContent/>
          <SubContent/>
          <SubContent/>
          <Advertisement/>
        </Main>
      </div>
      
    </div>
  )
}

export default App
