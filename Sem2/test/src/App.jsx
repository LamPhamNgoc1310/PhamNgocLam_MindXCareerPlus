import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [isToggle, setIsToggle] = useState(false)
  const [name, setName] = useState("Lam")
  const handleOnClick = () => {
    setName("Vu Anh")
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        #Note: Can't install tailwind.
      </h1>

      <Card name={isToggle ? "Lam" : "Vu Anh"}></Card>
      <button onClick={() => {setIsToggle(!isToggle)}}>Click to change name</button>
    </>
  )
}

export default App
