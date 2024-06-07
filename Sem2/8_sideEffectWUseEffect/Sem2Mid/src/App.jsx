import { useState } from 'react'
import './App.css'
import Data from './data.js'
import NavBar from './components/NavBar/NavBar.jsx'
import Banner from './components/Banner/Banner.jsx'
import Menu from './components/Menu/Menu.jsx'


function App() {
  const [selectedItem, setSelectedItem] = useState(Data[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  }
  return (
    <>

      <NavBar />

      <h2>Explore</h2>
      <p>What are you gonna watch today?</p>

      <Banner
        image={selectedItem.image}
        movieName={selectedItem.movieName}
        description={selectedItem.description}
      />

      <div className="new-release">
        <h2>New Release</h2>
        <div className='new-release-content'>
          {
            Data.map((item)=>{
              return <Menu item={item} onSelected={handleItemClick}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
