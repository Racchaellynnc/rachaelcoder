import React from 'react';
import './contact.styles.scss';

const ContactMePage = () => (
  <div className='landing-page'>

    <div class="contact-box">
      If you want to code with me in the future, please reach out. I would love to hear your feedback. Thank you for your time spent viewing my page!
      </div>
    <div className='box'>
      <form action="https://getsimpleform.com/messages?form_api_token=d7680d69dbae30f3e9e59b01e6982cb0" method="post">
        <input type='hidden' name='https://coderality.com/' value='https://coderality.com/' />
        <input type='text' placeholder='Your Name'></input>
        <input type='email' placeholder='Your Email'></input>
        <input className='comments' type='text' placeholder='Comments are appreciated :)'></input>
        <input className='submit' type='submit' value='Submit' />
      </form>
    </div>
  </div>
);

export default ContactMePage;