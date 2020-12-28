import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button'
import screenshot from '../../assets/images/shot2.png'

const SliceContainer = styled.div`

    & > .display {
        box-sizing: border-box;
        height: 340px;
        position: relative;

        & > img {
            height: 244px;
            width: 120px;
            position: absolute;
            top: calc(50% - 244px/2);
            left: calc(50% - 120px/2);

            @media (min-width: 768px) {
                height: 488px;
                width: 240px;
                top: calc(50% - 488px/2);
                left: calc(50% - 240px/2);
            }
        }

        @media (min-width: 768px) {
            height: 808px;
            width: 720px;
]        }
    }

    & > .info {
        box-sizing: border-box;
        height: 224px;
        position: relative;

        & > h2 {
            margin: 0px;
            width: 328px;
            height: 88px;
            position: absolute;
            top: 0px;
            left: calc(50% - 328px/2);
            font-family: Open Sans;
            font-style: normal;
            /* font-weight: 600; */
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            color: #303030;

            @media (min-width: 768px) {
                width: 528px;
                top: 252px;
                left: calc(50% - 528px/2);
                font-size: 48px;
                line-height: 56px;
            }

            & > span {
                color: #40ACBF;
            }
        }

        & > .button-wrapper {
            width: 328px;
            position: absolute;
            top: 128px;
            left: calc(50% - 328px/2);

            & > a {
                text-decoration: none;
            }

            @media (min-width: 768px) {
                width: 528px;
                top: 516px;
                left: calc(50% - 528px/2);
            }
        }

        @media (min-width: 768px) {
            height: 808px;
            width: 720px;
        }
    }

    @media (min-width: 768px) {
        display: flex;
    }
`

export default function HeroSlice() {
    return (
        <SliceContainer>
            <div className={'display'}>
                <img src={screenshot} alt={'Mentor Hub screenshot.'} />
            </div>

            <div className={'info'}>
                <h2>Fullstack developer impacting teams with <span>UX Design</span> influence</h2>
                <div className={'button-wrapper'}>
                    <NavLink to='/contact' activeClassName={'selected'}>
                        <Button buttonStyle={'primary'} buttonText={`Let's collaborate`} />
                    </NavLink>
                </div>
            </div>
        </SliceContainer>
    )
}
