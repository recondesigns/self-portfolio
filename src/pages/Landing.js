import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

const LandingContainer = styled.div`
    border: 2px dashed dodgerblue;
`

export default function Landing() {
    return (
        <LandingContainer>
            <p>Landing</p>
            <Button />
        </LandingContainer>
    )
}
