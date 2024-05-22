import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <>
      <PersonCard 
        firstName={'Jane'}
        lastName={'Doe'}
        age={45}
        hairColor={'Black'}
      />
      <PersonCard 
        firstName={'John'}
        lastName={'Smith'}
        age={88}
        hairColor={'Brown'}
      />
    </>
  )
}

export default App
