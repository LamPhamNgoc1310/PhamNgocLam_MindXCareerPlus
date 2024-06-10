import data from './data.js'
import './App.css'
import { useState } from 'react'
import { useSearchInput, useDebounce } from './hooks/index.js'

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <div>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} 
        />
      </div>
      <div>
        {data
         .filter((item)=> {
          return item.title.includes(searchValue);
         })
         .map((item) => {
            return (<div key={item.id}>{item.title}</div>)
         })}
      </div>
    </>
  )
}

export default App;