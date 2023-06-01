import { useState } from 'react'

import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  

  return (
    <>
      <PokemonCard pokemon={pokemonList[1]}/>
    </>
  )
}

export default App

const pokemonList = [

  {

    name: "bulbasaur",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

  },

  {

    name: "mew",

  },

];