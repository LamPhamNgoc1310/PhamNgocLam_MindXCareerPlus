
import './App.css'
import Card from './Card.jsx'
function App() {
  const cardList = [
    {
      img: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg" ,
      number: '00001',
      name: 'Bulbasaur'
    },

    {

    }
  ]
  
  return (
    <div className='app'>
      
      <Card img='https://img.pokemondb.net/artwork/large/bulbasaur.jpg' number='00001' name='Bulbasaur' ></Card>
      <Card img='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png' number='00002' name='Ivysaur' ></Card>
    </div>
  )
}

export default App
