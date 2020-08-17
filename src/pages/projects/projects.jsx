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
	</div>
		<div className="project">
			<Modal trigger={<CoderalityPhoto className="project-image">Show Modal</CoderalityPhoto>}>
				<Modal.Header className='modal-header'>Coderality</Modal.Header>
				<Modal.Description>
					<p>
						I made an e-commerce store that sells Programming Tutorials using React, Redux, Hooks, GraphQL, StripeAPI, and Firebase. .
          		</p>
					<p> Want to see the Code or the Website? </p>
					<a href='https://github.com/Racchaellynnc/coding-store'>
						<Github />
					</a>
					<a className='website-icon' href='https://coderality.com/'>
						<Website />
					</a>
				</Modal.Description>
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
						<p>
							This is a freelance project that I worked on using Vue, Axios, and foundations.
					</p>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		</div>
	</div>
);

export default ProjectPage;