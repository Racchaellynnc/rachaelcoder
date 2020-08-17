import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <nav class="navigation">
      <ul class="menu">
        <li class="menu__item">
          <Link to='/about' class="menu__link">
            <span class="menu__title">
              <span class="menu__first-word" data-hover="About">
                About&nbsp; 
              </span>
              <span class="menu__second-word" data-hover="Me">
                Me
              </span>
            </span>
          </Link>
        </li>

        <li class="menu__item">
          <Link to='/projects' class="menu__link">
            <span class="menu__title">
              <span class="menu__first-word" data-hover="My">
                My&nbsp; 
              </span>
              <span class="menu__second-word" data-hover="Projects ">
                Projects
              </span>
            </span>
          </Link>
        </li>

        <li class="menu__item">
          <Link to='/contactme' class="menu__link">
            <span class="menu__title">
              <span class="menu__first-word" data-hover="Contact">
                Contact&nbsp; 
              </span>
              <span class="menu__second-word" data-hover="Me">
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