import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'

// import Developer from './pages/Developer'
// import UxDesigner from './pages/UxDesigner'
// import About from './pages/About'
// import Contact from './pages/Contact'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  /* border: 2px solid lightcoral; */
`

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Landing />
      <Footer />
    </AppContainer>
  )
}
