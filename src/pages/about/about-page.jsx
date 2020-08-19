import React from 'react';
import './about-page.styles.scss';
import NameSvg from '../../components/svg/name';
import styled from 'styled-components';
import { SkillsBlue, SkillsGray, SkillsWhite, SkillsWhiteText, SkillsBlueText, SkillsGrayText } from '../../theme';

const Blue = styled.div`
background: ${SkillsBlue};
color: ${SkillsBlueText};
border-radius: 22px;
font-size: 16px;
font-weight: 300;
padding-top: 7px;
padding-bottom: 7px;
padding-left: 22px;
padding-right: 22px;
margin: 15px;
transition: 0.5s;
transition-timing-function: ease-in-out;
:hover{
	background: linear-gradient(to right, #50B0BD 20%, #999 80%); 
	padding-left: 28px;
	padding-right: 28px;
	transition: 0.5s;
	color: #222;
	transition-timing-function: ease-in-out;
}
@media screen and (max-width: 800px){
	font-size: 14px;
	margin: 10px;
}
`;

const White = styled.div`
background-color: ${SkillsWhite};
color: ${SkillsWhiteText};
font-size: 16px;
font-weight: 300;
border-radius: 22px;
padding-top: 7px;
padding-bottom: 7px;
padding-left: 22px;
padding-right: 22px;
margin: 15px;
transition: 0.5s;
transition-timing-function: ease-in-out;
	:hover{
		background: linear-gradient(to right, #50B0BD 20%, #999 80%); 
		padding-left: 28px;
		padding-right: 28px;
		transition: 0.2s;
		color: #222;
		transition-timing-function: ease-in-out;
	}
	@media screen and (max-width: 800px){
		font-size: 14px;
		margin: 10px;
	}
`;

const Gray = styled.div`
background-color: ${SkillsGray};
color: ${SkillsGrayText};
font-size: 16px;
font-weight: 300;
border-radius: 22px;
padding-top: 7px;
padding-bottom: 7px;
padding-left: 22px;
padding-right: 22px;
margin: 15px;
transition: 0.5s;
transition-timing-function: ease-in-out;
:hover{
	background: linear-gradient(to right, #50B0BD 20%, #999 80%); 
	color: #222;
	padding-left: 28px;
	padding-right: 28px;
	transition: 0.2s;
	transition-timing-function: ease-in-out;
}
@media screen and (max-width: 800px){
	font-size: 14px;
	margin: 10px;
}
`;

const AboutPage = () => (
	<div className="wrapper">
		<div className="pic-container">
			<NameSvg className="name-svg" />
			<div className="career">
				Full Stack Web Developer // UX/UI Designer 
			</div>
		</div>
		<div className="skills-container">
			<Blue>
				JavaScript
			</Blue>
			<White>
				React
			</White>
			<Gray>
				React Hooks
			</Gray>
			<Blue>
				Redux
			</Blue>
			<Blue>
				Vue
			</Blue>
			<White>
				Vue-Router
			</White>
			<White>
				Angular
			</White>
			<White>
				TypeScript
			</White>
			<Gray>
				Node
			</Gray>
			<Blue>
				MongoDB
			</Blue>
			<Blue>
				MySQL
			</Blue>
			<Gray>
				GraphQL
			</Gray>
			<Blue>
				CSS3
			</Blue>
			<White>
				SCSS
			</White>
			<Gray>
				HTML5
			</Gray>
			<Blue>
				JQuery
			</Blue>
			<White>
				GCP
			</White>
			<White>
				AWS
			</White>
			<White>
				Wordpress
			</White>
			<Gray>
				PHP
			</Gray>
			<Gray>
				CMS
			</Gray>
			<Blue>
				Adobe XD
			</Blue>
			<White>
				Sketch
			</White>
			<Gray>
				InDesign
			</Gray>
			<Gray>
				Photoshop
			</Gray>
			<White>
				Illustrator
			</White>
			
		</div>
	</div>
	
);

export default AboutPage;