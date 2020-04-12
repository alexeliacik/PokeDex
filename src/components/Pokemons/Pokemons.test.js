import React from "react"
import { shallow } from "enzyme"
import Pokemons from "./Pokemons"

test("renders without crashing", () => {
  const PokemonsComponentRender = shallow(<Pokemons>Testing!</Pokemons>)
  expect(PokemonsComponentRender.length).toBe(1)
})
