import React from 'react';
import './about-page.styles.scss';
import { ReactComponent as BackgroundPhoto } from '../../assets/rachael.svg';
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

			<div className="text-name">
				Rachael Coder
			</div>
		</div>
		<div className="section">
			<div class="my-title">
				<div className="title-section">
					I am a Full-Stack Web Developer, UX/UI Designer, and Game Engineer.<br></br><hr></hr>
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