import { useState, useEffect } from 'react'
// export default doesn't need {}
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count])
  return (
    <>
      <div>
        Count: {count}
      <button onClick={() => {setCount(count+1)}}>Count</button>
      </div>
    </>
  )
}

export default App
