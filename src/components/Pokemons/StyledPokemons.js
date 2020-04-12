import styled, { keyframes } from "styled-components"

const smoothReveal = keyframes`
  from{opacity:0}
  to{opacity:1}
`
const StyledPokemons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10px;
  width: 150px;
  height: 150px;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(56, 56, 56, 0.3);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  h1 {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #383838;
    text-transform: capitalize;
    text-align: center;
    font-size: 20px;
    backface-visibility: hidden;
    animation: ${smoothReveal} 0.8s;
  }

  img {
    animation: ${smoothReveal} 0.8s;
    padding-top: 5px;
  }

  a,
  a:link,
  a:visited {
    display: inline-block;
    height: 100%;
    width: 100%;
    color: black;
    text-decoration: none;

    & > div {
      padding-top: 20px;
    }
  }
`

export default StyledPokemons
