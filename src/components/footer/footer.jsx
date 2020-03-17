import React from 'react';
import './footer.styles.scss';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/githubicon.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

const Footer = () => (
    <div className='footer'>
        <div className='text-area'>
            Find me on Social Media
        </div>
        <div>
            <a href="https://www.linkedin.com/in/rachael-coder-378b1170/" > <LinkedIn className="icon" /></a>
            <a href="https://github.com/Racchaellynnc" > <Github className="icon" /></a>
            <a href="https://twitter.com/Rachaelcoder" > <Twitter className="icon" /></a>
        </div>
        <div className="text-area2">
            If you would like to know more, contact me and I will be sure to respond asap. :)
        </div>
    </div>
);

export default Footer;