import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import Landing from './pages/Landing'

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
    </AppContainer>
  )
}
