import React from "react"
import { useHistory } from "react-router-dom"

import StyledHeader from "./StyledHeader"

const Header = () => {
  let history = useHistory()
  return <StyledHeader onClick={() => history.push("/")}></StyledHeader>
}

export default Header
