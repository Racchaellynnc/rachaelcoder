import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <nav class="navigation">
      <ul class="menu">
        <li class="menu-item">
          <Link to='/about' class="menu-link">
            <span class="menu-title">
              <span class="menu-first-word" data-hover="About">
                About&nbsp; 
              </span>
              <span class="menu-second-word" data-hover="Me">
                Me
              </span>
            </span>
          </Link>
        </li>

        <li class="menu-item">
          <Link to='/projects' class="menu-link">
            <span class="menu-title">
              <span class="menu-first-word" data-hover="My">
                My&nbsp; 
              </span>
              <span class="menu-second-word" data-hover="Projects ">
                Projects
              </span>
            </span>
          </Link>
        </li>

        <li class="menu-item">
          <Link to='/contactme' class="menu-link">
            <span class="menu-title">
              <span class="menu-first-word" data-hover="Contact">
                Contact&nbsp; 
              </span>
              <span class="menu-second-word" data-hover="Me">
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