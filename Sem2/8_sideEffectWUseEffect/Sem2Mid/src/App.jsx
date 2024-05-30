import { useState } from 'react'
import './App.css'
import Data from './data.js'
import NavBar from './components/NavBar/NavBar.jsx'
import Banner from './components/Banner/Banner.jsx'


function App() {

  
  console.log(Data[0].movieName);
  return (
    <>

      <NavBar />

      <h2>Explore</h2>
      <p>What are you gonna watch today?</p>

      <Banner
        image={Data[0].image}
        movieName= {Data[0].movieName}
        description = {Data[0].description}
      />
    </>
  )
}

export default App
