import React from 'react'
import styled from 'styled-components'
import map from '../../assets/images/map-small.png'

const SliceContainer = styled.div`
    border: 1px dotted blue;

    & > .display {
        height: 312px;
        border: 1px solid orange;

        & > img {
            width: 375px;
            height: 312px;
        }
    }

    & > .info-div {
        height: 424px;
        border: 1px solid pink;

        & > h3 {
            margin: 0px;
            width: 328px;
            font-family: Open Sans Condensed;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #808080;
            opacity: 0.8;
            border: 1px dotted blue;
        }

        & > h2 {
            margin: 0px;
            width: 328px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #303030;
            border: 1px dotted blue;
        }

        & > p {
            margin: 0px;
            width: 328px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #303030;
            border: 1px dotted blue;
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
                <h2>{'Full-stack sites && web applications'}</h2>
                <p>{'Creating React components like its going out of style - schooled with the MERN stack, but consistently growing by adding new libraries and frameworks.'}</p>
            </div>
        </SliceContainer>
    )
}
