import React from 'react';
import './about-page.styles.scss';
import NameSvg from '../../components/svg/name';
import styled from 'styled-components';
import { SkillsBlue, SkillsGray, SkillsWhite, SkillsWhiteText, SkillsBlueText, SkillsGrayText } from '../../theme';

const Blue = styled.div`
background: ${SkillsBlue};
color: ${SkillsBlueText};
`;

const White = styled.div`
background-color: ${SkillsWhite};
color: ${SkillsWhiteText};
`;

const Gray = styled.div`
background-color: ${SkillsGray};
color: ${SkillsGrayText};
`;

const AboutPage = () => (
	<div className="wrapper">
		<div className="pic-container">
			<NameSvg className="name-svg" />
			<div className="career">
				Full Stack Web Developer 
			</div>
		</div>
		<div className="skills-container">
			<Blue className="skills">
				JavaScript
			</Blue>
			<White className="skills">
				React
			</White>
			<Gray className="skills">
				React Hooks
			</Gray>
			<Blue className="skills">
				Redux
			</Blue>
			<Gray className="skills">
				React Native
			</Gray>
			<Blue className="skills">
				Vue
			</Blue>
			<White className="skills">
				Angular
			</White>
			<Blue className="skills">
				Python
			</Blue>
			<White className="skills">
				TypeScript
			</White>
			<Blue className="skills">
				SEO
			</Blue>
			<White className="skills">
				Jest
			</White>
			<Gray className="skills">
				Node
			</Gray>
			<Blue className="skills">
				MongoDB
			</Blue>
			<Blue className="skills">
				MySQL
			</Blue>
			<Gray className="skills">
				GraphQL
			</Gray>
			<Blue className="skills">
				CSS3
			</Blue>
			<White className="skills">
				SCSS
			</White>
			<Gray className="skills">
				HTML5
			</Gray>
			<Blue className="skills">
				JQuery
			</Blue>
			<White className="skills">
				GCP
			</White>
			<Blue className="skills">
				C#
			</Blue>
			<White className="skills">
				AWS
			</White>
			<Gray className="skills">
				Serverless
			</Gray>
			<White className="skills">
				Wordpress
			</White>
			<Gray className="skills">
				PHP
			</Gray>
			<Blue className="skills">
				Adobe XD
			</Blue>
			<White className="skills">
				Sketch
			</White>
			<Gray className="skills">
				InDesign
			</Gray>
			<Blue className="skills">
				After Effects	
			</Blue>
			<Gray className="skills">
				Photoshop
			</Gray>
			<White className="skills">
				Illustrator
			</White>
		</div>
	</div>
	
);

export default AboutPage;