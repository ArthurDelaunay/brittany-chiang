import Main from "./components/Main"
import BoxTitle from "./components/BoxTitle"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <BoxTitle />
      </Main>
      <GlobalStyle />
    </>
  )
}

export default App
