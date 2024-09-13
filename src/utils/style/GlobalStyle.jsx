import { createGlobalStyle } from 'styled-components'
import backgroundImage from "../../assets/general/background.jpg"

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    margin: 120px 0 0 0;
    background-color: rgba(0, 0, 0, 0.99999);
    color: white;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .page-content {
    margin: 0 30px;
  }

  .rotating-background {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 180%;
    height: 180%;
    transform: translate(-50%, -50%) scale(1.2);
    background-image: url(${backgroundImage});
    background-position: center;
    animation: rotate 100s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`

function GlobalStyle() {

  return <StyledGlobalStyle />
}

export default GlobalStyle
