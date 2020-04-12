import styled from "styled-components"

const StyledError = styled.div`
  max-width: 600px;
  min-height: calc(100vh - 100px);
  margin: 0 auto;
  background-color: rgba(245, 246, 250, 1);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  .errorContent {
    padding: 2rem;
    margin-left: 2rem;
    .errorCode {
      font-size: 2rem;
      color: #939393;
      font-weight: bold;
    }
    & > h1 {
      font-size: 3rem;
      margin: 2rem 0;
    }
    & > h2 {
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
  .link {
    text-decoration: none;
    color: white;
    background-color: #ef5450;
    text-transform: uppercase;
    font-weight: bold;
    padding: 5px 30px;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ef5450;
  }
`

export default StyledError
