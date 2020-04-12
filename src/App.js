import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Pokemons from "./components/Pokemons/Pokemons"
import Pokemon from "./components/Pokemon/Pokemon"
import Error from "./components/UI/Error/Error"
import styled, { createGlobalStyle } from "styled-components"
import axios from "axios"
import PropTypes from "prop-types"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const StyledApp = styled.div`
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0px 3px 10px rgba(56, 56, 56, 0.3);
`
const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    let isSubscribed = true

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        if (isSubscribed) {
          setPokemons(response.data.results)
        }
      })
      .catch((err) => setError(true))

    return () => (isSubscribed = false)
  }, [])

  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path='/:id' component={Pokemon} />
          <Route path='/' exact render={() => <StyledApp>{error ? <Error /> : pokemons.map((poke) => <Pokemons key={poke.name} name={poke.name} pokeApiKey={poke.url} />)}</StyledApp>} />
        </Switch>
      </Router>
    </>
  )
}

export default App

App.propTypes = {
  pokeApiKey: PropTypes.string,
  name: PropTypes.string,
}
