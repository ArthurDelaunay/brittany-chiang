import styled from "styled-components"
import { big } from "../styles/spacings"

// const Main = ({ children }) => {
//   return <main>{children}</main>
// }

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0 ${big};
`

export default Main
