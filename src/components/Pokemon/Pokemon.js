import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Spinner from "../UI/Spinner/Spinner"
import styled, { keyframes } from "styled-components"
import axios from "axios"

const smoothReveal = keyframes`
  from{opacity:0; transform: translateY(10%)}
  to{opacity:1; transform: translateY(0)}
`

const StyledPokemon = styled.div`
  text-align: center;

  .pokemonContent {
    animation: ${smoothReveal} 0.8s;
    width: 50%;
    margin: 0 auto;
  }
`
const Pokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isSubscribed = true

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => {
        if (isSubscribed) {
          setPokemon(response.data)
        }
      })
      .catch((err) => console.log(err))

    return () => {
      isSubscribed = false
      clearTimeout(timer)
    }
  }, [id])

  return (
    <StyledPokemon>
      {loading ? (
        <Spinner />
      ) : (
        <div className='pokemonContent'>
          <p>{pokemon.name}</p>
          <div>{pokemon.sprites && <img src={pokemon.sprites.front_default} alt='' />}</div>
          {pokemon.stats &&
            pokemon.stats.map((stat) => (
              <p key={stat.stat.url}>
                {stat.stat.name} {stat.base_stat}
              </p>
            ))}
          <Link to='/'>Back</Link>
        </div>
      )}
    </StyledPokemon>
  )
}

export default Pokemon
