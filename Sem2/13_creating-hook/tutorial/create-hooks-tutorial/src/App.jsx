import { useState } from 'react'
// export default doesn't need {}
import usePrevious from './hooks/usePrevious'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const previousValue = usePrevious(count);

  useEffect(() => {
    
  }, [])

  console.log(previousValue)
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
