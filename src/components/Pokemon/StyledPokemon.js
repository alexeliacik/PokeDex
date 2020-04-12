import styled, { keyframes } from "styled-components"

const smoothReveal = keyframes`
  from{opacity:0; transform: translateY(10%)}
  to{opacity:1; transform: translateY(0)}
`

const StyledPokemon = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 600px;
  min-height: calc(100vh - 100px);
  margin: 0 auto;
  padding-top: 20px;
  box-shadow: 0px 3px 10px rgba(56, 56, 56, 0.3);

  .pokemonContent {
    animation: ${smoothReveal} 0.8s;
    width: 100%;
  }

  .nameImage {
    display: flex;
    text-align: center;
    padding: 10px 20px;

    & > div {
      border: 1px solid #383838;
      margin: 5px;
      border-radius: 10px;
      background-color: #f4f4f4;
      box-shadow: 0 3px 10px rgba(58, 58, 58, 0.4);
    }
  }

  .name {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    text-transform: capitalize;
  }

  .image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  table {
    width: 91.4%;
    margin: 0 auto;
    margin-bottom: 30px;
    border: 1px solid #383838;
    border-radius: 10px;
    border-collapse: collapse;
    background-color: #f4f4f4;
    box-shadow: 0 3px 10px rgba(58, 58, 58, 0.4);

    tr:not(:last-child) {
      border: 1px solid black;
    }

    td {
      padding: 10px;
      font-weight: bold;
      font-size: 14px;
    }
  }

  .link {
    display: inline-block;
    text-decoration: none;
    color: white;
    background-color: #ef5450;
    text-transform: uppercase;
    font-weight: bold;
    padding: 5px 30px;
    border: 1.5px solid #ef5450;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ef5450;
    transition: all 0.2s;

    &:hover {
      background-color: white;
      color: #ef5450;
      transform: translateY(-3px);
    }
  }

  .spinner {
    padding-top: 120px;
  }
`

export default StyledPokemon
