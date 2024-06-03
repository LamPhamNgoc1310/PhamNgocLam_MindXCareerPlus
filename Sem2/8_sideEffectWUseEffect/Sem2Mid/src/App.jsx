import { useState } from 'react'
import './App.css'
import Data from './data.js'
import NavBar from './components/NavBar/NavBar.jsx'
import Banner from './components/Banner/Banner.jsx'
import Menu from './components/Menu/Menu.jsx'


function App() {

  return (
    <>

      <NavBar />

      <h2>Explore</h2>
      <p>What are you gonna watch today?</p>

      <Banner
        image={Data[0].image}
        movieName={Data[0].movieName}
        description={Data[0].description}
      />

      {/* Stuck, khong hien thi cac anime ra duoc */}
      <div className="new-release">
        <h2>New Release</h2>
        <div className='new-release-content'>
          {
            Data.map((item, index)=>{
              return <Menu item={item} key={index}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
