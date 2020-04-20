import React from 'react';
import { Modal } from 'semantic-ui-react';
import { ReactComponent as VueCertification } from '../../assets/vue.svg';
import { ReactComponent as FccRwd } from '../../assets/rwd.svg';
import { ReactComponent as FccJs } from '../../assets/fccalgorithms.svg';
import { ReactComponent as Unity } from '../../assets/unity.svg';
import { ReactComponent as Gatsby } from '../../assets/gatsby.svg';
import { ReactComponent as Website } from '../../assets/globe.svg';
import './certifications.scss';

const CertificationsPage = () => (
    <div className="photo-box">
        <div className="heading">Check out the certifications I've recieved</div>
        <div className="project">

            <Modal trigger={<Gatsby className="project-image">Show Modal</Gatsby>}>
                <Modal.Header className='modal-header'>Progressive Web Application</Modal.Header>
                <Modal.Description>
                    <p>
                        In this Udemy course I made a Blog with Gatsby.JS, GraphQL, and React with WordPress. 
                        I learned how to use markdown remark, create pages with Gatsby and Wordpress as a headless CMS, how to turn 
                        an application into a PWA, and how make continuous deployments with Netlify Webhooks. 
                    </p>
                    <div className="icon-wrapper">
                    	<a className='website-icon' href='https://zealous-tereshkova-e79c6c.netlify.app/'>
						<Website />
					</a>
                    </div>
                </Modal.Description>
            </Modal>

            <Modal trigger={<FccRwd className="project-image">Show Modal</FccRwd>}>
                <Modal.Header className='modal-header'>Responsive Web Design</Modal.Header>
                <Modal.Description>
                    <p>
                        In this course I learned HTML5, Flexbox, CSS Grids, Applied Visual Design, and Web Design Principles.
                    </p>
                </Modal.Description>
            </Modal>

            <Modal trigger={<FccJs className="project-image">Show Modal</FccJs>}>
                <Modal.Header className='modal-header'> JavaScript Algorithms and Data Structures </Modal.Header>
                <Modal.Description>
                    <p>
                        In this course I learned how to use Regular Expressions, ES6, basic Data Structures,
                        Algorithm Scripting, Object Oriented Programming, Functional Programming, and basic JavaScript
                    </p>
                </Modal.Description>
            </Modal>

            <Modal trigger={<VueCertification className="project-image">Show Modal</VueCertification>}>
                <Modal.Header className='modal-header'>Vue and GraphQL with gridsome </Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <p>
                        </p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>

            <Modal trigger={<Unity className="project-image">Show Modal</Unity>}>
                <Modal.Header className='modal-header'>C# with Unity </Modal.Header>
                <Modal.Description>
                    <p>In this course I learned how to build a minecraft game using Unity and C#.
                        I learned the anatomy of a cube, UVs and texture atlases, graphing, and dynamics.
                    </p>
                </Modal.Description>
            </Modal>
        </div>
    </div >
);

export default CertificationsPage;