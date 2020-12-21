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
	</div>
	
);

export default AboutPage;