import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import menuIcon from '../../assets/images/menu-icon.png'

const HeaderContainer = styled.div`
    position: relative;
    height: 96px;
    display: flex;
    /* background: #ECD679; */

    & > .nav-container {
        width: 576px;
        height: 32px;
        position: absolute;
        top: calc(50% - 32px/2);
        right: 24px;
        display: none;
        justify-content: space-between;

        & > a {
            margin: 0px;
            font-family: Open Sans Condensed;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #303030;
            text-decoration: none;
        }

        & > .selected {
            text-decoration: underline;
        }

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
            <div className={'nav-container'}>
                <NavLink to='/home' activeClassName='selected'>Home</NavLink>
                <NavLink to='/developer' activeClassName='selected'>Developer</NavLink>
                <NavLink to='/uxdesigner' activeClassName='selected'>UX Designer</NavLink>
                <NavLink to='/about' activeClassName='selected'>About</NavLink>
                <NavLink to='/contact' activeClassName='selected'>Contact</NavLink>
            </div>
            <img className={'menu'} src={menuIcon} alt={'View navigation'} />
        </HeaderContainer>
    )
}
