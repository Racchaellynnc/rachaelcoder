import React from 'react';
import './about-page.styles.scss';
import { ReactComponent as BackgroundPhoto } from '../../assets/love.svg';
import CardComponent from '../../components/cards/cards';
// import { ReactComponent as Me } from '../../assets/mee.svg';


const AboutPage = () => (
	<div class="">
		<div class="">
			<div class="">
				<div className="pic-container">
					<BackgroundPhoto className="pic" />
				</div>
			</div>
		</div>	
		<div className="section">		
			<div class="my-title">
				<div className="text-name">
						Rachael Coder
				</div>
				<div className="title-section">
					I am a Full-Stack Web Developer with over 4 year of experience. I am passionate about Creating Websites and Learning New Technologies. 
					I have spent most of my professional career advancing my knowledge in JavaScript
					(React, Vue, and Angular) but I have learned so many other skills along the way. 
				</div>	
			</div>
			<div class="card-title">
				<div className="card-section">
					<CardComponent />
				</div>
			</div>
		</div>
	</div >
);

export default AboutPage;