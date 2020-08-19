import React from 'react';
import './about-page.styles.scss';
import NameSvg from '../../components/svg/name';
import styled from 'styled-components';
import { paralaxColor, aboutMeBoxes, aboutMeBoxesText } from '../../theme';

const Paralax = styled.div`
width: 100%;
height: 200vh;
background-color: ${paralaxColor};
color: black;
`;

const Boxes = styled.div`
background-color: ${aboutMeBoxes};
margin-top: 20px;
height: 200vh;
padding: 20px;
color: ${aboutMeBoxesText}
font-size: 20px;
text-align: center;
`;


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