import React from 'react'
import styled from 'styled-components'
import { HeroSlice } from '../components/HeroSlice'
import { SliceOne } from '../components/SliceOne'
import { SliceTwo } from '../components/SliceTwo'
import { SliceThree } from '../components/SliceThree'

const LandingContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export default function Landing() {
    return (
        <LandingContainer>
            <HeroSlice />
            <SliceOne />
            <SliceTwo />
            <SliceThree />
        </LandingContainer>
    )
}
