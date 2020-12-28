import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import IconBar from './IconBar'
import { Button } from '../Button'
import mapSmall from '../../assets/images/map-small.png'
import mapLarge from '../../assets/images/map-lrg.png'


const SliceContainer = styled.div`
    height: 736px;
    background: #F7FCFC;

    @media (min-width: 768px) {
        display: flex;
    }

    & > .display {
        box-sizing: border-box;
        height: 312px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: URL(${mapSmall});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @media (min-width: 768px) {
            width: 720px;
            height: 736px;
            background: URL(${mapLarge});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }

    & > .info-div {
        box-sizing: border-box;
        position: relative;
        height: 424px;

        & > h3 {
            margin: 0px;
            width: 328px;
            position: absolute;
            top: 40px;
            left: calc(50% - 328px/2);
            font-family: Open Sans Condensed;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #303030;
            opacity: 0.8;

            @media (min-width: 768px) {
                width: 528px;
                top: 104px;
                left: 96px;
            }
        }

        & > h2 {
            margin: 0px;
            width: 328px;
            position: absolute;
            top: 96px;
            left: calc(50% - 328px/2);
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #303030;

            & > span {
                color: #40ACBF;
            }

            @media (min-width: 768px) {
                top: 184px;
                left: 96px;
                width: 528px;
                font-size: 32px;
                line-height: 40px;
                letter-spacing: -1px;
            }
        }

        & > p {
            margin: 0px;
            width: 328px;
            position: absolute;
            top: 152px;
            left: calc(50% - 328px/2);
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #303030;

            @media (min-width: 768px) {
                top: 288px;
                left: 96px;
                width: 528px;
            }
        }

        & > .button-wrapper {
            width: 328px;
            position: absolute;
            top: 328px;
            left: calc(50% - 328px/2);

            & > a {
                text-decoration: none;
            }

            @media (min-width: 768px) {
                top: 528px;
                left: 96px;
                width: 528px;
            }
        }

        @media (min-width: 768px) {
            width: 720px;
            height: 736px;
        }
    }
`

export default function SliceOne() {
    return (
        <SliceContainer>
            <div className={'display'}></div>
            <div className={'info-div'}>
                <h3>{'Development'}</h3>
                <h2>Full-stack sites <span>&&</span> web applications</h2>
                <p>{'Creating React components like its going out of style - schooled with the MERN stack, but consistently growing by adding new libraries and frameworks, and now loving the Jamstck.'}</p>
                <IconBar icons={['figma', 'dribbble']} />
                <div className={'button-wrapper'}>
                    <NavLink to='/developer' activeClassName={'selected'}>
                        <Button buttonStyle={'secondary'} buttonText={'View dev projects'} />
                    </NavLink>
                </div>
            </div>
        </SliceContainer>
    )
}
