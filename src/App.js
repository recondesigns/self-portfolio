import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'

import Developer from './pages/Developer'
import UxDesigner from './pages/UxDesigner'
import About from './pages/About'
import Contact from './pages/Contact'

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
      <Switch>
        <Route exact path='/home'>
          <Landing />
        </Route>
        <Route path='/developer'>
          <Developer />
        </Route>
        <Route path='/uxdesigner'>
          <UxDesigner />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </AppContainer>
  )
}
