import data from './data.js'
import './App.css'
import { useState } from 'react'
import { useSearchInput } from './hooks/index.js'

function App() {
  const {search, isSearch} = useSearchInput('');

  handleSearch = () => {
    setIsSearch(true);
  }
  return (
    <>
      <div>
        <input onChange={handleChnageSearchValue} value={searchValue} />
        <button>Search</button>
      </div>

      <div>
        {data
        .filter((item) => {
          return isSearch ? item.title.includes(searchValue)
        })}
      </div>
    </>
  )
}