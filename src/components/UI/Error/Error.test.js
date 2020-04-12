import React from "react"
import { shallow } from "enzyme"
import Error from "./Error"

test("renders without crashing", () => {
  const ErrorComponentRender = shallow(<Error>Testing!</Error>)
  expect(ErrorComponentRender.length).toBe(1)
})
