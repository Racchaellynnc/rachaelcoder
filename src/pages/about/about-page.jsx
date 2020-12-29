import React from 'react';
import './about-page.styles.scss';
import NameSvg from '../../components/svg/name';
import {ReactComponent as ReactIcon } from '../../assets/react.svg';
import {ReactComponent as JsIcon } from '../../assets/js.svg';
import {ReactComponent as Vue } from '../../assets/vue.svg';
import {ReactComponent as Node } from '../../assets/node.svg';
import {ReactComponent as Html5 } from '../../assets/html5.svg';
import {ReactComponent as Css3 } from '../../assets/css3.svg';
import {ReactComponent as Sass } from '../../assets/sass.svg'
import {ReactComponent as Aws } from '../../assets/aws.svg';
import {ReactComponent as Python } from '../../assets/python.svg';

import {ReactComponent as Git } from '../../assets/git.svg';
import {ReactComponent as Databases } from '../../assets/database.svg';
import {ReactComponent as Debugging } from '../../assets/debugging.svg';
import {ReactComponent as Mobile } from '../../assets/mobile.svg';
import {ReactComponent as Analytics } from '../../assets/analytics.svg';
import {ReactComponent as Swift } from '../../assets/swift.svg';
import {ReactComponent as MobileApps } from '../../assets/mobile2.svg';
import {ReactComponent as CodeBranch } from '../../assets/code-branch.svg';
import {ReactComponent as Cloud } from '../../assets/cloudtech.svg';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { SkillsContainer, SkillsIcon, WhoIAmContainer, AboutTitles, AboutMeWrapper, BoxShadow, AboutMeText } from '../../theme';

const Skills = styled.div`
height: 100%;
width: 100%;
flex-wrap: wrap;
margin: auto;
justify-content: center;
background-color: ${SkillsContainer};
`
const Icons = styled.svg`
max-width: 150px;
margin: auto;
padding: 30px;
margin-bottom: 97px;
margin-top: 77px;
color: ${SkillsIcon} !important;
@media screen and (max-width: 800px){
	max-width: 99px;
	margin-bottom: 37px;
	margin-top: 47px;
  }
`

const WhoIAm = styled.div`
height: 100%;
display: flex;
width: 100%;
margin: auto;
justify-content: center;
background-color: ${WhoIAmContainer} ;
`

const Titles = styled.div`
width: 100%;
text-align: center;
margin: auto;
font-size: 22px;
padding-top: 77px;
letter-spacing: 3px;
color: ${AboutTitles};
`

const AboutMe = styled.div`
box-shadow: 7px 5px 20px 0px ${BoxShadow};
width: 70%;
border-radius: 4px;
display: flex;
margin: 150px;
flex-direction: row;
background-color: ${AboutMeWrapper};
@media screen and (max-width: 800px){
	flex-direction: column;
	width: 100%;
	margin: auto;
	margin-top: 77px;
  }
`

const AboutText = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
font-size: 20px;
font-family: helvetica;
font-weight: 200;
line-height: 33px;
width: 55%;
margin: auto;
color: ${AboutMeText};
@media screen and (max-width: 1277px){
	font-size: 14px;
	line-height: 17px;
  }
@media screen and (max-width: 800px){
	width: 100%;
	margin: auto;
	font-size: 20px;
	line-height: 33px;
	padding: 44px;
  }
`

AOS.init();

const AboutPage = () => (
	<div className="wrapper">
		<div className="pic-container">
			<NameSvg className="name-svg" />
			<div className="career">
				<Titles>
					FULL STACK WEB DEVELOPER
				</Titles>
			</div>
		</div >
		<Skills>
			<Titles>
				MY SKILLS
			</Titles>
			<div className="skills-icon-wrapper">
			<div 
				className="animation-wrapper" 
				data-aos="flip-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-bottom">
				<Icons><ReactIcon/></Icons>
				<Icons><JsIcon/></Icons>
				<Icons><Vue/></Icons>	
			</div>
			<div 
				className="animation-wrapper" 
				data-aos="flip-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-bottom">
				<Icons><Aws  /></Icons>
				<Icons><Python  /></Icons>
				<Icons><Sass  /></Icons>
			</div>
			<div className="animation-wrapper" 
				data-aos="flip-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-bottom">
				<Icons><Node  /></Icons>
				<Icons><Html5  /></Icons>
				<Icons><Css3  /></Icons>
			</div>





			<div 
				className="animation-wrapper" 
				data-aos="flip-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-bottom">
				<Icons><Git/></Icons>
				<Icons><Databases/></Icons>
				<Icons><Debugging/></Icons>
			</div>
				<div 
					className="animation-wrapper" 
					data-aos="flip-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-bottom">
					<Icons><Mobile/></Icons>
					<Icons><Analytics/></Icons>
					<Icons><Swift/></Icons>
				</div>
				<div 
					className="animation-wrapper" 
					data-aos="flip-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-bottom">
					<Icons><MobileApps/></Icons>
					<Icons><Cloud/></Icons>
					<Icons><CodeBranch/></Icons>
				</div>
			</div>
		</Skills>
			<Titles>
				WHO I AM
			</Titles>
			<WhoIAm
				data-aos="fade-right"
				data-aos-offset="200"
				data-aos-delay="40"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-bottom"
			>
				<AboutMe>
					<div className="my-photo">
						<img className="me" src='https://i.postimg.cc/vThLx0FW/Screen-Shot-2020-12-28-at-4-56-19-PM.png' alt="beach" ></img>
					</div>
					<AboutText>
						My name is Rachael Coder (Yes, that is my real last name). I am 27 years of age. I was born in Washington and currently live in Silicon Valley. 
						I am a Full Stack Developer with over 4 years of professional experience. I am currently doing freelance work while I am searching for a Full time position. 
						In my free time, I enjoy hiking, camping, reading, puzzles, adventures, cooking, learning new skills, and making the world a better place. 
					</AboutText>
				</AboutMe>
			</WhoIAm>
	</div>
	
);

export default AboutPage;
