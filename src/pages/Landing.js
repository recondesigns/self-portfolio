import React from 'react'
import styled from 'styled-components'
// import { HeroSlice } from '../components/HeroSlice'
import { SliceOne } from '../components/SliceOne'

const LandingContainer = styled.div`
    /* border: 1px dotted green; */
`

export default function Landing() {
    return (
        <LandingContainer>
            {/* <HeroSlice /> */}
            <SliceOne />
        </LandingContainer>
    )
}
