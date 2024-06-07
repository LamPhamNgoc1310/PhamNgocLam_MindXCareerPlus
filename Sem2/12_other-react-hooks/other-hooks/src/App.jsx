import { useRef } from 'react'
import { useState, useMemo } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleStateClick = () => {
    setCount(count+1);
  }
  const [listNumber, setListNumber] = useState([1,2,3,4,5,6]);
  // the code below re-render the page, so we use an alternative hook "useMemo"
  // const filteredNumber = useRef(
  //   listNumber.filter((item)=> {
  //     console.log('run')
  //     return item%2===0;
  //   })
  // )
  const filteredNumber = useMemo(()=>{
    return listNumber.filter((item)=> {
      console.log('run')
      return item%2 === 0;
    }) 
  });

  const handleAddRandom = () => {
    const newNumber = Math.round(Math.random(1,10)*100);
    setListNumber([...listNumber,newNumber])
  }

  return (
    <>
      {filteredNumber}
      <p>Count state: {count}</p>
      <button onClick={handleStateClick}>Change State Click</button>

      <button onClick={handleAddRandom}>Add Random Number</button>

    </>
  )
}

export default App
