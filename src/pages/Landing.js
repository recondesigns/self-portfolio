import React from 'react'
import styled from 'styled-components'
import { HeroSlice } from '../components/HeroSlice'
import { SliceOne } from '../components/SliceOne'
import { SliceTwo } from '../components/SliceTwo'


const LandingContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* border: 1px dotted green; */
`

export default function Landing() {
    return (
        <LandingContainer>
            <HeroSlice />
            <SliceOne />
            <SliceTwo />
        </LandingContainer>
    )
}
