import { createGlobalStyle } from 'styled-components'
import backgroundImage from "../assets/background.jpg"

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
      background-image: url(${backgroundImage});
      background-color: black;
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: center;
      background-attachment: fixed;
      color: white;
    }
`

function GlobalStyle() {

  return <StyledGlobalStyle />
}

export default GlobalStyle
