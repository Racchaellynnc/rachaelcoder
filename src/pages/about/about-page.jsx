import React from 'react';
import './about-page.styles.scss';
import { ReactComponent as Photo } from '../../assets/meee.svg';
import { ReactComponent as SkillsPhoto } from '../../assets/skillss.svg';

const AboutPage = () => (
    <div className='landing-page'>
      <div className="name-box">
        Rachael Coder
      </div>
      <div className="name-title">
        Full-Stack Developer
      </div>
      <div className="photo-box">
        <Photo className='photo' />
      </div>
      <div className='text-box'>

          <div className='intro-text'>
            Welcome to my portfolio! I am thrilled that you are
            looking at my website. A few of my favorite things to do are going 
            to the beach, eating at vegan resturants, writing as much code 
            as humanley possible, drinking coffee, and making the world a 
            better place.  
          </div>
          
        </div>

      <div className='skill-box'> 
        <SkillsPhoto className='skills' />
      </div>

      </div>
  );

export default AboutPage;