import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button'
import headshot from '../../assets/images/headshot2x.png'

const SliceContainer = styled.div`
    background: #ECD679;

    @media (min-width: 768px) {
        display: flex;
    }

    & > .display {
        box-sizing: border-box;
        height: 312px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(${headshot});
        background-size: cover;
        background-repeat: no-repeat;

        @media (min-width: 768px) {
            width: 720px;
            height: 736px;
        }
    }

    & > .info-div {
        box-sizing: border-box;
        position: relative;
        height: 484px;

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
            top: 88px;
            left: calc(50% - 328px/2);
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #303030;

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
            top: 168px;
            left: calc(50% - 328px/2);
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #303030;

            @media (min-width: 768px) {
                top: 328px;
                left: 96px;
                width: 528px;
            }
        }

        & > .button-wrapper {
            width: 328px;
            position: absolute;
            top: 392px;
            left: calc(50% - 328px/2);

            & > a {
                text-decoration: none;
            }

            @media (min-width: 768px) {
                top: 540px;
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

export default function SliceThree() {
    return (
        <SliceContainer>
             <div className={'display'}></div>
            <div className={'info-div'}>
                <h3>{'About Me'}</h3>
                <h2>{'User advocate craftsman. Hobby coder turned mid-level engineer. Veteran.'}</h2>
                <p>{'Web development has been in my life since a random class in high school exposed me to HTML and CSS (pre-CSS 2.1 lol), which ignited a lifelong hobby of coding.'}<br /><br />{'Luckily, I get paid to rev up my dev mastery and to professionally solve user problems by augmenting my coding skillset with UX Design principles.'}</p>
                <div className={'button-wrapper'}>
                    <NavLink to='/contact' activeClassName={'selected'}>
                        <Button buttonStyle={'secondary'} buttonText={'Contact me'} />
                    </NavLink>
                </div>
            </div>
        </SliceContainer>
    )
}
