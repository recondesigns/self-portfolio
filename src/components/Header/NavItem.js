import React from 'react'
import styled from 'styled-components'
import { setLinkDisplay } from './utils'

const ItemContainer = styled.div`
    width: 96px;
    height: 32px;
    border-bottom: ${props => props.borderBottom};

    & > p {
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
    }
`

export default function NavItem(props) {
    const { linkText, linkStatus } = props
    let borderDisplay = setLinkDisplay(linkStatus)

    return (
        <ItemContainer borderBottom={borderDisplay}>
            <p>{linkText}</p>
        </ItemContainer>
    )
}
