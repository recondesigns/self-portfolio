import React from 'react'
import styled from 'styled-components'
import dribbbleIcon from '../../assets/images/dribbble-icon.svg'
import figmaIcon from '../../assets/images/figma-icon.svg'

const BarContainer = styled.div`
    width: 328px;
    position: absolute;
    top: 264px;
    left: calc(50% - 328px/2);
    display: flex;
    align-items: center;

    & > img {
        margin-right: 24px;
        width: 24px;
        height: 24px;
        
        @media (min-width: 768px) {
            margin-right: 32px;
            width: 32px;
            height: 32px;
        }
    }

    @media (min-width: 768px) {
        top: 392px;
        left: 96px;
        width: 528px;
        height: 64px;
    }
`

export default function IconBar() {

    return (
        <BarContainer>
            <img src={figmaIcon} alt={'Figma icon'} />
            <img src={dribbbleIcon} alt={'Dribbble icon'} />
        </BarContainer>
    )
}
