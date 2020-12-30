import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <nav className="navigation">
      <ul className="menu">
        <li className="menu-item">
          <Link to='/about' className="menu-link">
            <span className="menu-title">
              <span className="menu-first-word" data-hover="About">
                About&nbsp; 
              </span>
              <span className="menu-second-word" data-hover="Me">
                Me
              </span>
            </span>
          </Link>
        </li>

        <li className="menu-item">
          <Link to='/projects' className="menu-link">
            <span className="menu-title">
              <span className="menu-first-word" data-hover="My">
                My&nbsp; 
              </span>
              <span className="menu-second-word" data-hover="Projects ">
                Projects
              </span>
            </span>
          </Link>
        </li>

        <li className="menu-item">
          <Link to='/contactme' className="menu-link">
            <span className="menu-title">
              <span className="menu-first-word" data-hover="Contact">
                Contact&nbsp; 
              </span>
              <span className="menu-second-word" data-hover="Me">
                Me
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;