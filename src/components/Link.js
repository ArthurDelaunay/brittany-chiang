import styled from "styled-components"
import { lightBlue } from "../styles/fontColors"
import { fontMono } from "../styles/fontFamilies"

const StyledLink = styled.li`
  font-family: ${fontMono};
  font-size: 13px;
  color: ${lightBlue};
  cursor: pointer;
  counter-increment: 1;
  display: list-item;
  list-style-type: none;
  line-height: 16.9px;
  position: relative;
  text-align: left;
  text-decoration-color: ${lightBlue};
  text-decoration-line: none;
  text-decoration-style: solid;
  box-sizing: border-box;
`

const Link = ({ content, url }) => {
  return (
    <StyledLink>
      <a href={url}>{content}</a>
    </StyledLink>
  )
}

export default Link
