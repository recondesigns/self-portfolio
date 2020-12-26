import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'
import logo from '../../assets/images/logo.png'
import menuIcon from '../../assets/images/menu-icon.png'


const HeaderContainer = styled.div`
    position: relative;
    height: 96px;
    background: #ECD679;

    & > div {
        width: 576px;
        height: 32px;
        position: absolute;
        top: calc(50% - 32px/2);
        right: 24px;
        display: none;
        justify-content: space-between;

        @media (min-width: 768px) {
            display: flex;
        }
    }

    & > .logo {
        width: 112px;
        height: 48px;
        position: absolute;
        bottom: 8px;
        left: 16px;

        @media (min-width: 768px) {
            left: 24px;
            bottom: calc(50% - 48px/2);

        }
    }

    & > .menu {
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 8px;
        right: 16px;
        display: block;

        @media (min-width: 768px) {
            right: 24px;
            display: none; 
        }
    }

    @media (min-width: 768px) {
        height: 64px;
    }
`

export default function Header() {

    return (
        <HeaderContainer>
            <img className={'logo'} src={logo} alt={'Impact Design logo'} />
            <div>
                <NavItem linkStatus={'active'} linkText={'Home'} />
                <NavItem linkStatus={'inactive'} linkText={'Developer'} />
                <NavItem linkStatus={'inactive'} linkText={'UX Designer'} />
                <NavItem linkStatus={'inactive'} linkText={'About'} />
                <NavItem linkStatus={'inactive'} linkText={'Contact'} />
            </div>
            <img className={'menu'} src={menuIcon} alt={'View navigation'} />
        </HeaderContainer>
    )
}
