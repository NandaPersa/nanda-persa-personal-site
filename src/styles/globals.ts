import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #F4F8FA;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle
