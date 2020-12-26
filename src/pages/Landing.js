import React from 'react'
import styled from 'styled-components'
import { HeroSlice } from '../components/HeroSlice'

const LandingContainer = styled.div`
    /* border: 1px dotted green; */
`

export default function Landing() {
    return (
        <LandingContainer>
            <HeroSlice />
        </LandingContainer>
    )
}
