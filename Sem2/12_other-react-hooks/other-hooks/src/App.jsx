import { useRef } from 'react'
import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleStateClick = () => {
    setCount(count+1);
  }

  const countRef = useRef(0)
  const handleRefClick = () => {
    countRef.current++;
  }
  return (
    <>
      <p>Count state: {count}</p>
      <button onClick={handleStateClick}>Change State Click</button>
      <p>Count Ref: {countRef.current}</p>
      <button onClick={handleRefClick}>Change Ref Click</button>

    </>
  )
}

export default App
