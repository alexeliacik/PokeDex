import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Spinner from "../UI/Spinner/Spinner"
import styled, { keyframes } from "styled-components"
import axios from "axios"

const smoothReveal = keyframes`
  from{opacity:0}
  to{opacity:1}
`
const StyledPokemons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10px;
  border: 1px solid black;
  width: 150px;
  height: 150px;
  padding: 10px;

  cursor: pointer;

  h1 {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    text-align: center;
    font-size: 20px;
    backface-visibility: hidden;
    animation: ${smoothReveal} 0.8s;
  }

  img {
    animation: ${smoothReveal} 0.8s;
  }

  a,
  a:link,
  a:visited {
    color: black;
    text-decoration: none;
  }
`

const Pokemon = ({ name, pokeApiKey }) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(pokeApiKey).then((response) => {
      setPokemon(response.data)
    })
  }, [pokeApiKey])

  const splittedApiKey = pokeApiKey.split("/")
  const id = splittedApiKey[splittedApiKey.length - 2]

  return (
    <StyledPokemons>
      <Link to={`/${id}`}>
        {pokemon.sprites === undefined ? <Spinner /> : <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
        <h1>{name}</h1>
      </Link>
    </StyledPokemons>
  )
}

export default Pokemon
