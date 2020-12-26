import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #303030;
`

const Wrapper = styled.div`
    width: 224px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
        margin: 0px 0px 16px 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        color: #FFFFFF;
    }

    & > .divider {
        margin: 0px 0px 16px 0px;
        width: 75%;
        height: 2px;
        background: #2D77D2;
    }

    & > p {
        margin: 0px 0px 8px 0px;
        font-family: Open Sans Condensed;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
`

export default function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
                <h2>Contact Info</h2>
                <div className={'divider'}></div>
                <p>{'michaelstedman81@gmail.com'}</p>
                <p>{'830-262-1146'}</p>
            </Wrapper>
        </FooterContainer>
    )
}
