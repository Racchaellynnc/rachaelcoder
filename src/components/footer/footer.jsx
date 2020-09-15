import React from 'react';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/githubicon.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import styled from 'styled-components';
import { FooterColor, FooterText, FooterSmallText } from '../../theme';

const Footers = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
background: ${FooterColor};
text-align: center;
justify-content: center;
margin: auto;
color: rgb(255, 255, 255);
padding: 10px;
@media screen and (max-width: 800px){
    flex-direction: column;
}
`;

const Text = styled.div`
font-size: 22px;
font-weight: 200;
padding-top: 20px;
padding-bottom: 20px;
line-height: 27px;
color: ${FooterText};
@media screen and (max-width: 800px){
    line-height: 44px;
    font-size: 22px;
}
`;

const Icons = styled.div`
width:50px;
padding: 5px;
`;

const IconContainer = styled.div`
display: flex;
flex-direction: row;
margin: auto;
`;
const OtherText = styled.div`
display: flex;
font-weight: 200;
color: ${FooterSmallText};
flex-direction: column;
font-size: 16px !important;
`;

const Footer = () => (
    <Footers>
        <Text className='text-area'>
            Follow me on Social Media
        </Text>
        <IconContainer>
            <Icons><a href="https://www.linkedin.com/in/rachael-coder-378b1170/" > <LinkedIn className="icon" /></a></Icons>
            <Icons><a href="https://github.com/Racchaellynnc" > <Github className="icon" /></a></Icons>
            <Icons><a href="https://www.facebook.com/rachael.codes.33" > <Facebook className="icon" /></a></Icons>
            <Icons><a href="https://twitter.com/Rachaelcoder" > <Twitter className="icon" /></a></Icons>
        </IconContainer>
        <OtherText>
            <div className="text-area2">
                Email: rachycodes@gmail.com
            </div>
            <div className="text-area2">
                Phone: 650-477-0577
            </div>
            <div className="text-area2">
                Location: Silicon Valley, CA
            </div>
        </OtherText>
       
    </Footers>
);

export default Footer;