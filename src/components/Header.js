import styled from "styled-components"
import NavBar from "../components/NavBar"
import { lightBlue } from "../styles/fontColors"
import { fontSans } from "../styles/fontFamilies"
import { small } from "../styles/fontSizes"

const StyledHeader = styled.header`
  padding: 0px 40px;
  align-items: center;
  font-family: ${fontSans};
  font-size: ${small};
  color: ${lightBlue};
  height: 100px;
  justify-content: space-between;
  line-height: 26px;
  position: fixed;
  top: 0px;
  width: 815px;
  z-index: 11;
`

const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  )
}

export default Header
