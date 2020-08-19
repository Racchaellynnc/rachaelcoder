import React from 'react';
import './projects.styles.scss';
import { ReactComponent as CoderalityPhoto } from '../../assets/coderality.svg';
import { ReactComponent as LwPhoto } from '../../assets/lw.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Website } from '../../assets/globe.svg';
import { ReactComponent as Cf } from '../../assets/cf.svg';
import { Modal } from 'semantic-ui-react';


const ProjectPage = () => (
	<div className="photo-box">
		<div className="heading">
			Check out the projects I've worked on
			<div className="heading-tip">
				(Click on the pictures for more detail)
			</div>
		</div>
		<div className="project">
			<Modal trigger={<CoderalityPhoto className="project-image">Show Modal</CoderalityPhoto>}>
				<Modal.Header className='modal-header'>Coderality</Modal.Header>
				<Modal.Content image>
					<Modal.Description>
						<p>
							I made an e-commerce store that sells Programming T-Shirts and a Tech Blog. This website was built using React, 
							Redux, Hooks, HOC, Node.JS GraphQL, StripeAPI, ContextAPI, GoogleMapsAPI and Firebase. This is a personal project of mine and was designed 
							and built 100% by myself. I used Adobe XD to design mock-ups and Adobe Illustrator to design the logo, graphics and 
							svg images. I also integrated React Helmet to enable SEO into the webpages. 
						</p>
						<p> Want to see the Code or the Website? </p>
						<a className='website-icon' href='https://github.com/Racchaellynnc/coding-store'>
							<Github />
						</a>
						<a className='website-icon' href='https://coderality.com/'>
							<Website />
						</a>
					</Modal.Description>
				</Modal.Content>
			</Modal>

			<Modal trigger={<LwPhoto className="project-image">Show Modal</LwPhoto>}>
				<Modal.Header className='modal-header'> Lavish Web Creations </Modal.Header>
				<Modal.Content image>
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
							<Website />
						</a>
					</Modal.Description>
				</Modal.Content>
			</Modal>
			<Modal trigger={<Cf className="project-image">Show Modal</Cf >}>
				<Modal.Header className='modal-header'> Casting Frontier </Modal.Header>
				<Modal.Content image>
					<Modal.Description>
						<p className="modal-description">
							This is a freelance project that I worked on in March of 2020. The tech stack included 
							Vue, Vue-Router, JavaScript, Node, ESlint, Axios, Sass, and foundation for the UI.
							I built a few components for a table that was being used in their project. I built 
							the table itself, a card scroller (to view the table on mobile devices), pagination, 
							the responsive menu, a project search bar, and a sort select filter.
						</p>	
						
					</Modal.Description>
				</Modal.Content>
			</Modal>
		</div>
	</div>
);

export default ProjectPage;