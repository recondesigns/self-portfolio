import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.png'

const HeaderContainer = styled.div`
    background: #ECD679;

    & > img {
        width: 112px;
        height: 48px;
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt={'Impact Design logo'} />
        </HeaderContainer>
    )
}
