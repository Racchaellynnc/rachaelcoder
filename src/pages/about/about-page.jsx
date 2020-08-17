import React from 'react';
import './about-page.styles.scss';
import NameSvg from '../../components/svg/name';

const AboutPage = () => (
	<div className="wrapper">
		<div className="pic-container">
			<NameSvg className="name-svg" />
			<div className="career">
				Full Stack Web Developer // UX/UI Designer 
			</div>
		</div>
	</div>
	
);

export default AboutPage;