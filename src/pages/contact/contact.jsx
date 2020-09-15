import React from 'react';
import './contact.styles.scss';
import {ReactComponent as Smile } from '../../assets/smile.svg';
import styled from 'styled-components';
import { ContactBox } from '../../theme';


const Contact = styled.div`
width: 55%;
margin: auto;
display: flex;
flex-wrap: wrap;
border-radius: 4px;
margin-bottom: 77px;
padding: 22px;
background-color: ${ContactBox};

`;

const ContactMePage = () => (
	<div className='landing-page'>
		<div class="contact-box">
			If you want to code with me in the future or if you need help developing or designing a website, please reach out to me by filling out the form below. I love meeting new people and helping where ever I can.<br></br>Thank you for taking the time to view my page.
			<Smile className="smile"/> 
    	</div>
		<Contact className='box'>
			<form action="https://getsimpleform.com/messages?form_api_token=d7680d69dbae30f3e9e59b01e6982cb0" method="post">
				<input type='hidden' name='https://coderality.com/' value='https://coderality.com/' />
				<input type='text' placeholder='Your Name'></input>
				<input type='email' placeholder='Your Email'></input>
				<input className='comments' type='text' placeholder='Your Message'></input>
				<input className='submit' type='submit' value='Submit' />
			</form>
		</Contact>
	</div>
);

export default ContactMePage;