import { createGlobalStyle } from 'styled-components'
import { baseFontSize } from './constants'

import 'normalize.css' // https://github.com/necolas/normalize.css

const GlobalStyle = createGlobalStyle`

html {
  font-size: ${baseFontSize}px;
  background-color: #111;
}

body {
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    line-height: 1.3;
    background-color: #fff;
  }

  img,
  svg { 
    display: block;
    max-width: 100%;
  }

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
