import React from 'react';
import './projects.styles.scss';
// import { ReactComponent as Photo} from '../../assets/comp.svg';
import { ReactComponent as RecipePhoto} from '../../assets/recipesite.svg';
import { ReactComponent as CcPhoto} from '../../assets/cc.svg';
import { ReactComponent as CoderalityPhoto} from '../../assets/coderality.svg';
import { ReactComponent as LwPhoto} from '../../assets/lw.svg';
import { ReactComponent as Github } from '../../assets/github.svg'; 
import { ReactComponent as Website } from '../../assets/globe.svg';
import { ReactComponent as Gita } from '../../assets/gita.svg';
import { ReactComponent as Cf } from '../../assets/cf.svg';
import { Image, Modal } from 'semantic-ui-react';


const ProjectPage = () => (
<div className="photo-box">

<div className="heading">Check out the projects I've worked on</div>

<div className="project">
  <Modal trigger={<CoderalityPhoto className="project-image">Show Modal</CoderalityPhoto>}>
    <Modal.Header className='modal-header'>Coderality</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' className='modal-pic' src={CoderalityPhoto} />
      <Modal.Description>
       
        <p>
        I made an e-commerce store that sells Programming Tutorials using React, Redux, Hooks, GraphQL, StripeAPI, and Firebase. . 
        </p>

        <p> Want to see the Code or the Website? </p>
        <a href='https://github.com/Racchaellynnc/coding-store'>
          <Github  />
        </a>
        <a className='website-icon' href='https://coderality.com/'>
          <Website  />
        </a>


      </Modal.Description>
    </Modal.Content>
  </Modal>

  <Modal trigger={<LwPhoto className="project-image">Show Modal</LwPhoto>}>
    <Modal.Header className='modal-header'> Lavish Web Creations </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' className='modal-pic' src={LwPhoto} />
      <Modal.Description>
       
        <p>
          I worked on Lavish Web during and built the Landing Page, Job Board, and part of the Blog. I designed and built UI/UX code for several projects on a
          team of developers. I built applications using HTML, CSS,
          Node, and JavaScript. I used React and Vue for building
          SPA functionality. I was trained to use proper coding standards,
          code documentation, and proper technologies for
          maintaining codebase. I Gained experience with Firebase,
          Google Cloud, Github, Bitbucket, Jira and Asana. I worked
          in an Agile environment.
        </p>
        <p> Want to see the Website? </p>
        <a className='website-icon' href='https://www.lavishweb.com/'>
          <Website  />
        </a>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  <Modal trigger={<Gita className="project-image">Show Modal</Gita >}>
    <Modal.Header className='modal-header'> Glow in the Art </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' className='modal-pic' src={Gita} />
      <Modal.Description>
       
        <p>
          This is a person project that I have been working on to display my art. It is using Vue.js, Mongo.DB, Axios, Vuex, and bulma. 
        </p>
        <p> Want to see the Website? </p>
        <a className='website-icon' href='https://blackliteart.com/'>
          <Website  />
        </a>
      </Modal.Description>
    </Modal.Content>
  </Modal>

  <Modal trigger={<Cf className="project-image">Show Modal</Cf >}>
    <Modal.Header className='modal-header'> Casting Frontier </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' className='modal-pic' src={Cf} />
      <Modal.Description>
       
        <p>
          This is a freelance project that I worked on using Vue, Axios, and foundations.
        </p>

      </Modal.Description>
    </Modal.Content>
  </Modal>
  <Modal trigger={<RecipePhoto className="project-image">Show Modal</RecipePhoto>}>
    <Modal.Header className='modal-header'>Recipe Search </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' className='modal-pic' src={RecipePhoto} />
      <Modal.Description>
       
        <p>
          I made this project during my freelance work in 2017 using a Recipe API. I designed the layout using CSS grids and React. 
        </p>
        <p> Want to see the Code? </p>
        <a href='https://github.com/Racchaellynnc/react-recipe-app'>
        <Github  /></a>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  <Modal trigger={<CcPhoto className="project-image">Show Modal</CcPhoto>}>
    <Modal.Header className='modal-header'>Captivating Clicks </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' className='modal-pic' src={CcPhoto} />
      <Modal.Description>
       
        <p>
          I made this project while I was a freelancer using Angular 2. I made the Front-End using CSS grids, MaterialUI and Angular. The Back-End consists of Firebase, Node, and MongoDB. I used Google Cloud Functions to implement the photo uploading feature where it stores users and comments in MongoDB.  
        </p>
        <p> Want to see the Code? </p>
        <a href='https://github.com/Racchaellynnc/Angular-Website'>
        <Github  /></a>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  


</div>

</div>
  );

export default ProjectPage;