import { createGlobalStyle } from "styled-components"
import { darkBlue } from "../styles/backgroundColors"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "SF Mono";
    src: url("https://fonts.cdnfonts.com/css/sf-mono");
  }
  @font-face {
    font-family: "Calibre";
    src: url('https://fonts.cdnfonts.com/css/calibre');
  }
body {
    background-color : ${darkBlue}
}
`

export default GlobalStyle
