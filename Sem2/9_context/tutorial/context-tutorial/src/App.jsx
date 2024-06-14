import { useState, useEffect } from 'react'
import ThemeProvider from './themeContext/ThemeProvider';
import ThemeContext from './themeContext/ThemeContext';
// export default doesn't need {}
import './App.css'
import { useContext } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <>
      <ThemeProvider>
        <div>
          Count: {count}
          <button onClick={() => { setCount(count + 1) }}>Count</button>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
