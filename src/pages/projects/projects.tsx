import React from 'react';
import './projects.styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCarousel from '../../components/carousel/carousel';
import {AboutTitles} from '../../theme';
import styled from 'styled-components';

const Titles = styled.div`
width: 100%;
text-align: center;
margin: auto;
font-size: 22px;
padding-top: 177px;
letter-spacing: 3px;
color: ${AboutTitles};
@media screen and (max-width: 800px){
	width: 70%;
	font-size: 20px;
	letter-spacing: 2px;
  }
`

const ProjectPage = () => (
	<div className="photo-box">
		<Titles
			data-aos="fade-up"
			data-aos-offset="200"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-bottom"
			>
				CHECK OUT MY PROJECTS 
		</Titles>
		<div 
			data-aos="flip-up"
			data-aos-offset="200"
			data-aos-delay="350"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-bottom"
			className="heading-tip"
		>
		<ProjectCarousel />
	</div>
</div>
);

export default ProjectPage;