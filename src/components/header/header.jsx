import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const navLinks = [
  { title: 'About Me', path: '/about' },
  { title: 'My Projects', path: '/projects' },
  { title: 'Contact Me', path: '/contactme' }
]

const Header = () => (
  <div className='header'>
    <div className='options'>
      {navLinks.map((obj) => (
        <Link className='option' to={obj.path}>
          {obj.title}
        </Link>
      ))}
    </div>
  </div>
);

export default Header;