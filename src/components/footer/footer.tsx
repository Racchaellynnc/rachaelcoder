import React from 'react';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/githubicon.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import styled from 'styled-components';
import { FooterColor, FootersIcon, AboutTitles } from '../../theme';

const Titles = styled.div`
width: 100%;
text-align: center;
margin: auto;
font-size: 22px;
padding-top: 27px;
letter-spacing: 3px;
color: ${AboutTitles};
`

const Footers = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
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

const FooterIcons = styled.svg`
width: 40px;
padding: 3px;
margin-top: -20px;
margin-bottom: -20px;
margin-left: 77px;
margin-right: 77px;
display: flex;
justify-content: space-between;
color: ${FootersIcon} !important;
@media screen and (max-width: 800px){
    margin: 10px;
}
`

const IconContainer = styled.div`
display: flex;
width: 100%;
margin: auto;
justify-content: center;
flex-direction: row;
margin: auto;
`;

const Link = styled.a`
text-decoration: none;
`;

const Footer = () => (
    <Footers>
        <Titles 
            data-aos="zoom-in"
            data-aos-delay="350"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="bottom-bottom">
             FIND ME ON SOCIAL MEDIA
        </Titles>
        <IconContainer>
            <Link href="https://www.linkedin.com/in/rachael-coder-378b1170/" ><FooterIcons><LinkedIn/></FooterIcons> </Link>
            <FooterIcons><Link href="https://github.com/Racchaellynnc" > <Github /></Link></FooterIcons>
            <FooterIcons><Link href="https://www.facebook.com/rachael.codes.33" > <Facebook  /></Link></FooterIcons>
            <FooterIcons><Link href="https://twitter.com/Rachaelcoder" > <Twitter /></Link></FooterIcons>
        </IconContainer>
    </Footers>
);

export default Footer;