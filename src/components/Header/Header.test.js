import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"

test("renders without crashing", () => {
  const HeaderComponentRender = shallow(<Header>Testing!</Header>)
  expect(HeaderComponentRender.length).toBe(1)
})
