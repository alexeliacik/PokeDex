import React from "react"
import styled from "styled-components"

const StyledError = styled.div`
  width: 90%;
  min-height: 90vh;
  margin: 0 auto;
  background-color: rgba(245, 246, 250, 1);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  .errorContent {
    padding: 2rem;
    margin-left: 2rem;
    .errorCode {
      font-size: 4rem;
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
  .errorImage {
    background-size: cover;
    background-position: top;
    width: 100%;
    min-height: 90vh;
  }
`

const Error = (props) => {
  return (
    <StyledError>
      <div className='errorContent'>
        <div className='errorCode'>404 Error</div>
        <h1>Sorry, we can’t seem to find what you’re looking for.</h1>
        <h2>You've landed on a URL that doesn't seem to exist on Pokemon Api. Here's some options:</h2>
        <h2>You could try a search up in the header, that should turn up whatever you were looking for.</h2>
      </div>
      <div className='errorImage'></div>
    </StyledError>
  )
}

export default Error
