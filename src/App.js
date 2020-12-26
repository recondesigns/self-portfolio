import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  border: 2px solid lightcoral;
`

export default function App() {
  return (
    <AppContainer>
      <h1>App Component</h1>
    </AppContainer>
  )
}
