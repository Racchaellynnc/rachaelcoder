import React from 'react';
import './footer.styles.scss';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/githubicon.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import styled from 'styled-components';
import { FooterColor} from '../../theme';

const Footers = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
background: ${FooterColor};
text-align: center;
justify-content: center;
margin: auto;
color: rgb(255, 255, 255);
padding-top: 10px;
`;

const Footer = () => (
    <Footers>
        <div className='text-area'>
            Follow me on Social Media
        </div>
        <div>
            <a href="https://www.linkedin.com/in/rachael-coder-378b1170/" > <LinkedIn className="icon" /></a>
            <a href="https://github.com/Racchaellynnc" > <Github className="icon" /></a>
            <a href="https://www.facebook.com/rachael.codes.33" > <Facebook className="icon" /></a>
            <a href="https://twitter.com/Rachaelcoder" > <Twitter className="icon" /></a>
        </div>
        <div className="text-area2">
            rachycodes@gmail.com
        </div>
    </Footers>
);

export default Footer;