import React from "react"
import { shallow } from "enzyme"
import Pokemon from "./Pokemon"

test("renders without crashing", () => {
  const PokemonComponentRender = shallow(<Pokemon>Testing!</Pokemon>)
  expect(PokemonComponentRender.length).toBe(1)
})
