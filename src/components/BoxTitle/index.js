import Container from "./Container"
import Content from "./Content"
import H1 from "./H1"
import H2 from "./H2"
import H3 from "./H3"

const index = () => {
  return (
    <Container>
      <H1>Hi, my name is</H1>
      <H2>Brittany Chiang.</H2>
      <H3>I build things for the web.</H3>
      <Content>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </Content>
    </Container>
  )
}

export default index
