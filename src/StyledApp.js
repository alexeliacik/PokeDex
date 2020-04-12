import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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

export default StyledApp
