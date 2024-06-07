import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import './App.css'
function App() {

  const[listPokemon, setListPokemon] = useState([])

  // const queryPokemon = () => {
  //   const result =  fetch("https://pokeapi.co/api/v2/pokemon").then((result) => {
  //     return result.json();
  //   }).then((rs)=>{
  //     setListPokemon(rs.results);
  //     return rs;
  //   })
  // }

  const queryPokemon = async () => {
    const query = await fetch('https://pokeapi.co/api/v2/pokemon');
    const result = await query.json();
    console.log(result);
  }

  return (
    <div className="reactApp">
      <h1>Hello World</h1>
      <button onClick={queryPokemon()}>Query API</button>
      {listPokemon.map((pokemon, idx) => {
        return <div key={idx}> {pokemon.name} </div>
      })}
    </div>
  )
}

export default App
