import React from 'react';
import './contact.styles.scss';
import {ReactComponent as Smile } from '../../assets/smile.svg';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import {  AboutTitles, FormInput, ContactBox } from '../../theme';

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

const ContactText  = styled.div`
color: ${AboutTitles};
`;

const FormColor  = styled.div`
background-color: ${FormInput};
`;

const ContactMePage = () => (
	<div className='landing-page'>
		<div class="contact-box">
			<ContactText>
				If you want to code with me in the future or if you need help developing or designing a website, reach out to me by filling out the form below. I love meeting new people and helping where ever I can.
			<br></br><br></br>Thank you for taking the time to view my page.<br></br>
			<Smile className="smile"/> 
			</ContactText>
			
    	</div>
		<Contact className='box'>
			<Form action="https://getsimpleform.com/messages?form_api_token=b8895f4d6999fd03eb1d4bbfeb5dc4a8" method="post">
				<input type='hidden' name='https://rachaelcoder.com/' value='https://rachaelcoder.com/' />
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Your Name</Form.Label>
					<Form.Control type="text" placeholder='Your Name'/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Your Email</Form.Label>
					<Form.Control type="email"  placeholder='Your Email'/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Comments</Form.Label>
					<Form.Control type='text' as="textarea" rows={7} placeholder='Your Message'/>
				</Form.Group>
				<input className='submit' type='submit' value='Submit' />
			</Form>

		</Contact>
	</div>
);

export default ContactMePage;