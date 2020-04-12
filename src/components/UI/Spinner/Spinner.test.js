import React from "react"
import { shallow } from "enzyme"
import Spinner from "./Spinner"

test("renders without crashing", () => {
  const spinnerComponentRender = shallow(<Spinner>Testing!</Spinner>)
  expect(spinnerComponentRender.length).toBe(1)
})
