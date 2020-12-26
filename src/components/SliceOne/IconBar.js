import React from 'react'
import styled from 'styled-components'
import reactIcon from '../../assets/images/react-icon.svg'
import gatsbyIcon from '../../assets/images/gatsby-icon.svg'
import graphqlIcon from '../../assets/images/graphql-icon.svg'
import mongoIcon from '../../assets/images/mongodb-icon.svg'
import firebaseIcon from '../../assets/images/firebase-icon.svg'
import githubIcon from '../../assets/images/github-icon.svg'

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
            <img src={reactIcon} alt={'React.js icon'} />
            <img src={gatsbyIcon} alt={'Gatsby.js icon'} />
            <img src={graphqlIcon} alt={'GraphQl.js icon'} />
            <img src={firebaseIcon} alt={'Google Firebase icon'} />
            <img src={mongoIcon} alt={'MongoDb icon'} />
            <img src={githubIcon} alt={'Github icon'} />
        </BarContainer>
    )
}
