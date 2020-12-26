import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

const LandingContainer = styled.div`
    border: 2px dashed dodgerblue;
`

export default function Landing() {
    return (
        <LandingContainer>
            <Button buttonStyle={'primary'} buttonText={`Let's collaborate`} />
        </LandingContainer>
    )
}
