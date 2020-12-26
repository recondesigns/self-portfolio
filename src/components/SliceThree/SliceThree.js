
import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import headshot from '../../assets/images/headshot2x.png'

const SliceContainer = styled.div`
    /* height: 736px; */
    background: #ECD679;
    /* border: 1px dotted blue; */

    @media (min-width: 768px) {
        display: flex;
        /* background: lightgoldenrodyellow; */
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
        border: 1px solid green;

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
            color: #808080;
            opacity: 0.8;
            /* border: 1px dotted blue; */

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
            /* border: 1px dotted blue; */

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
            /* border: 1px dotted blue; */

            @media (min-width: 768px) {
                top: 288px;
                left: 96px;
                width: 528px;
            }
        }

        & > .button-wrapper {
            width: 328px;
            position: absolute;
            top: 392px;
            /* bottom: 0px; */
            left: calc(50% - 328px/2);
            /* border: 1px dotted green; */

            @media (min-width: 768px) {
                top: 528px;
                left: 96px;
                width: 528px;
            }
        }

        @media (min-width: 768px) {
            width: 720px;
            height: 736px;
            /* background: green; */
        }
    }
`

export default function SliceThree() {
    return (
        <SliceContainer>
             <div className={'display'}>
                {/* <img src={headshot} alt={'Map screenshot'} /> */}
            </div>

            <div className={'info-div'}>
                <h3>{'About Me'}</h3>
                <h2>{'User advocate craftsman. Hobby coder turned professional problem solver. Veteran.'}</h2>
                <p>{'Web development has been in my life since a random class in high school exposed me to HTML and CSS (pre-CSS 2.1 lol), which ignited a lifelong hobby of coding for me.'}<br /><br />{'Luckily, I am paid to up my dev mastery and professionally solve user problems by augmenting my coding skillset with UX Design principles.'}</p>
                {/* <p>{`Luckily, I get to continue up my dev mastery and solve user problems by augmenting my coding skillset with UX Design principles`}</p> */}
                <div className={'button-wrapper'}>
                    <Button buttonStyle={'secondary'} buttonText={'View UX Case Studies'} />
                </div>
            </div>
        </SliceContainer>
    )
}
