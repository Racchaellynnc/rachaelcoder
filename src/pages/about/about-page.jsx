import React from 'react';
import './about-page.styles.scss';
import { ReactComponent as BackgroundPhoto } from '../../assets/0000000.svg';
import CardComponent from '../../components/cards/cards';


const AboutPage = () => (
	<div class="ui vertically divided grid">
		<div class="two column row">
			<div class="column">
				<BackgroundPhoto className="pic" />
			</div>
			<div class="column intro">
				<div className="name">
					<div className="text">
						Rachael Coder
					</div>
				</div>
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