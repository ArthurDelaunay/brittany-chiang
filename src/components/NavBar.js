import styled from "styled-components"
import { lightBlue } from "../styles/fontColors"
import { big } from "../styles/spacings"
import { fontMono } from "../styles/fontFamilies"
import LinkContainer from "./LinkContainer"
import Logo from "./Logo"
import { small } from "../styles/fontSizes"

const StyledNavBar = styled.nav`
  color: ${lightBlue};
  height: ${big};
  display: flex;
  font-family: ${fontMono};
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  line-height: 23.4px;
  position: relative;
  top: 0px;
  width: 111px;
  z-index: 12;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo />
      <LinkContainer />
    </StyledNavBar>
  )
}

export default NavBar
