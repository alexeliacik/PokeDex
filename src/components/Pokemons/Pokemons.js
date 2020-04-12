import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Spinner from "../UI/Spinner/Spinner"
import StyledPokemons from "./StyledPokemons"

import axios from "axios"

const Pokemons = ({ name, pokeApiKey }) => {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let isSubscribed = true
    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)

    axios
      .get(pokeApiKey)
      .then((response) => {
        if (isSubscribed) {
          setPokemon(response.data)
        }
      })
      .catch((err) => setError(true))

    return () => {
      isSubscribed = false
      clearTimeout(timer)
    }
  }, [pokeApiKey])

  const splittedApiKey = pokeApiKey.split("/")
  const id = splittedApiKey[splittedApiKey.length - 2]

  let pokemonsContent = (
    <Link to={`/${id}`}>
      {pokemon.sprites === undefined || loading ? <Spinner /> : <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      <h1>{name}</h1>
    </Link>
  )
  if (error) {
    pokemonsContent = <h3>Something went wrong!!</h3>
  }

  return <StyledPokemons>{pokemonsContent}</StyledPokemons>
}

export default Pokemons
