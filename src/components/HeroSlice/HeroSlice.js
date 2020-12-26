import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import screenshot from '../../assets/images/screenshot.png'

const SliceContainer = styled.div`
    height: 564px;
    /* border: 2px dashed dodgerblue; */

    & > .display {
        height: 340px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px solid purple; */

        & > img {
            height: 244px;
        }
    }

    & > .info {
        height: 224px;
        position: relative;
        /* border: 1px solid orange; */

        & > h2 {
            margin: 0px;
            width: 328px;
            height: 88px;
            position: absolute;
            top: 0px;
            left: calc(50% - 328px/2);
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 28px;
            color: #303030;
            /* border: 1px dotted blue; */

            & > span {
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 28px;
                color: #40ACBF;
            }
        }

        

        & > .button-wrapper {
            width: 328px;
            position: absolute;
            top: 128px;
            left: calc(50% - 328px/2);
            /* border: 1px dashed black; */
        }
    }
`

export default function HeroSlice() {
    return (
        <SliceContainer>
            <div className={'display'}>
                <img src={screenshot} alt={'Mentor Hub screenshot.'} />
            </div>

            <div className={'info'}>
                <h2>Fullstack developer impacting teams using <span>UX Design</span> influence</h2>
                <div className={'button-wrapper'}>
                    <Button buttonStyle={'primary'} buttonText={`Let's collaborate`} />
                </div>
            </div>
        </SliceContainer>
    )
}
