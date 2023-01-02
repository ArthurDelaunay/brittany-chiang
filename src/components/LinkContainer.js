import styled from "styled-components"
import { lightBlue } from "../styles/fontColors"
import { fontMono } from "../styles/fontFamilies"
import Link from "./Link"

const StylledLinkContainer = styled.ol`
  font-family: ${fontMono};
  font-size: 18px;
  color: ${lightBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  line-height: 23.4px;
  list-style-type: none;
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  padding-inline-start: 0px;
`

const LinkContainer = () => {
  return (
    <StylledLinkContainer>
      <Link content="About" url="" />
      <Link content="Experience" url="" />
      <Link content="Work" url="" />
      <Link content="Contact" url="" />
    </StylledLinkContainer>
  )
}

export default LinkContainer
