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
    width: 40px;
    height: 40px;
  }

  .page-content {
    margin: 30px;
  }
  
  h1 {
    font-size: 2.8rem;
    margin-top: 0;
  }

  /* Entrée depuis la gauche */
  .slide-left-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .slide-left-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  .slide-left-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-left-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 300ms, transform 300ms;
  }

  /* Entrée depuis la droite */
  .slide-right-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .slide-right-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 200ms;
  }

  .slide-right-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-right-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 300ms, transform 300ms;
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
