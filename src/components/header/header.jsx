import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';


const Header = () => (
    <div className='header'>
      <div className='options'>
        <Link className='option' to='/about'>
          About Me
        </Link>
        <Link className='option' to='/projects'>
          My Projects
        </Link>
        <Link className='option' to='/contactme'>
          Contact Me
        </Link> 
      </div>
    </div>
  );

  export default Header;