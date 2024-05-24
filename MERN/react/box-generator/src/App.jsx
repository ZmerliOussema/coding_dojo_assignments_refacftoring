import { useState } from 'react'
import DisplayBox from './components/DisplayBox'
import FormBox from './components/FormBox'

function App() {
  const [colorList, setColorList] = useState([])

  return (
    <>
      <DisplayBox colorList={colorList} setColorList={setColorList}/>
      <FormBox colorList={colorList} setColorList={setColorList}/>
    </>
  )
}

export default App
