import React from 'react';
import { Modal } from 'react-bootstrap';
import './workexperience.scss'


const Work = () => (
    <div className="photo-box">
        <div className="heading">Check out the Companies I have been a part of!</div>
        <div className="project">
            <Modal trigger={<div className="project-image">Western Digital</div>}>
                <Modal.Header className='modal-header'>Western Digital</Modal.Header>
                <Modal.Description>
                    <p> As a Web Developer at Western Digital, I make changes to there internal UI social platform and meet with
                        coworkers to discuss changes to be made to their
                        profiles.
                    </p>
                </Modal.Description>
            </Modal>

            <Modal trigger={<div className="project-image">Lavish Web </div>}>
                <Modal.Header className='modal-header'>Lavish Web Creations</Modal.Header>
                <Modal.Description>
                    <p>
                        Designed and built UI/UX code for several projects on a
                        team of developers. Built applications using HTML, CSS,
                        Node, and JavaScript. I use React and Vue for building
                        SPA functionality. Trained to use proper coding standards,
                        code documentation, and proper technologies for
                        maintaining codebase. Gained experience with Firebase,
                        Google Cloud, Github, Bitbucket, Jira and Asana. Worked
                        in an Agile environment.
                        </p>
                </Modal.Description>
            </Modal>

            <Modal trigger={<div className="project-image">SNHU</div>}>
                <Modal.Header className='modal-header'>Southern New Hampshire University</Modal.Header>
                <Modal.Description>
                    <p> I went to Southern New Hampshire University from 2016-2019 with majoring in Computer Science minoring in Graphic Design.
                        At SNHU I learned alot about Object Oriented Programming focusing on Python. I also learned about IT, Linux, Design and Security Applications, VPN, SQL Queries, HTTPs and more.
                    </p>
                </Modal.Description>
            </Modal>

            <div className="more-text"></div>
            <div className="more-text">
                If you want to know more about these positions, feel free to reach out to me for more information!
            </div>
        </div>
    </div>
);

export default Work;