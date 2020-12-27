import React from 'react'
import styled from 'styled-components'
import IconBar from './IconBar'
import { Button } from '../Button'
import map from '../../assets/images/map-small.png'

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

        & > img {
            width: 375px;
            height: 312px;

            @media (min-width: 768px) {
                width: 100%;
                height: 100%;
            }
        }

        @media (min-width: 768px) {
            width: 720px;
            height: 736px;
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
            <div className={'display'}>
                <img src={map} alt={'Map screenshot'} />
            </div>
            <div className={'info-div'}>
                <h3>{'Development'}</h3>
                <h2>Full-stack sites <span>&&</span> web applications</h2>
                <p>{'Creating React components like its going out of style - schooled with the MERN stack, but consistently growing by adding new libraries and frameworks, and now loving the Jamstck.'}</p>
                <IconBar icons={['figma', 'dribbble']} />
                <div className={'button-wrapper'}>
                    <Button buttonStyle={'secondary'} buttonText={'View dev projects'} />
                </div>
            </div>
        </SliceContainer>
    )
}
