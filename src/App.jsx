import React, { useEffect, useState } from 'react'

import pokeApi from './api'

const App = () => {

  const [pokemon, setPokemon] = useState({
    id: 0,
    name: '',
    image: '',
    covered: true
  })

  const { random } = pokeApi

  useEffect(async () => {

    const newPokemon = await random()

    setPokemon({ ...pokemon, ...newPokemon })

  }, [])

  const handleClick = () => {
    setPokemon({ ...pokemon, covered: false })
  }

  return (
    <main>
      <div className="nes-container is-rounded main-container">
      <p>¿Quien es este Pokemon?</p>
        <img src={pokemon.image} className={`pokemon-image ${pokemon.covered && 'covered'}`} />
        <p>{ pokemon.covered ? <span>&nbsp;</span> : pokemon.name }</p>
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={handleClick}
        >
          Adivina
        </button>
      </div>
    </main>
  )
}

export default App

