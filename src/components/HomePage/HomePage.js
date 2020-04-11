import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Pokemons from "../Pokemons/Pokemons"
import Pokemon from "../Pokemon/Pokemon"
import styled from "styled-components"
import axios from "axios"

const StyledHomePage = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const HomePage = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => setPokemons(response.data.results))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Switch>
        <Route path='/:id' component={Pokemon} />
        <Route
          path='/'
          exact
          render={() => (
            <StyledHomePage>
              {pokemons.map((poke) => (
                <Pokemons key={poke.name} name={poke.name} pokeApiKey={poke.url} />
              ))}
            </StyledHomePage>
          )}
        />
      </Switch>
    </>
  )
}

export default HomePage
