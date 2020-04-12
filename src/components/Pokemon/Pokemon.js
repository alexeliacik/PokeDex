import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import Error from "../UI/Error/Error"
import Spinner from "../UI/Spinner/Spinner"
import StyledPokemon from "./StyledPokemon"

import axios from "axios"

const Pokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let isSubscribed = true

    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
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
  }, [id])

  let pokemonContent = null
  if (loading) {
    pokemonContent = (
      <div className='spinner'>
        <Spinner />
      </div>
    )
  }
  if (error) {
    pokemonContent = <Error />
  }

  if (!error && !loading) {
    pokemonContent = (
      <div className='pokemonContent'>
        <div className='nameImage'>
          <div className='name'>{pokemon.name}</div>
          <div className='image'>{pokemon.sprites && <img src={pokemon.sprites.front_default} alt={pokemon.name} />}</div>
        </div>
        <table>
          <tbody>
            {pokemon.stats &&
              pokemon.stats.map((stat) => {
                let pokemonName = ""
                const pokemonNameArray = stat.stat.name.toUpperCase().split("-")
                if (pokemonNameArray.length === 2) {
                  pokemonName = `${pokemonNameArray[0]} ${pokemonNameArray[1]}`
                } else {
                  pokemonName = pokemonNameArray[0]
                }
                return (
                  <tr key={stat.stat.url}>
                    <td>{pokemonName}</td>
                    <td>{stat.base_stat}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <Link className='link' to='/'>
          Back
        </Link>
      </div>
    )
  }

  return <StyledPokemon>{pokemonContent}</StyledPokemon>
}

export default Pokemon
