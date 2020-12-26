import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 200px;
    height: 40px;
    background: #ECD679;
    border: 2px solid #303030;
    box-sizing: border-box;
    box-shadow: 4px 4px 0px rgba(48, 48, 48, 0.5);
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #303030;
    outline: none;

    &:hover {
        box-shadow: 2px 2px 0px rgba(48, 48, 48, 0.5);
    }

    &:active  {
        box-shadow: none;
    }
`

export default function Button(props) {
    const { buttonText } = props
    return <StyledButton>{buttonText}</StyledButton>
}
