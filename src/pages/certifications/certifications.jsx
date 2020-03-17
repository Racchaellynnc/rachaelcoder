import React from 'react';
import { Modal } from 'semantic-ui-react';
import { ReactComponent as VueCertification } from '../../assets/vue.svg';
import { ReactComponent as FccRwd } from '../../assets/rwd.svg';
import { ReactComponent as FccJs } from '../../assets/fccalgorithms.svg';
const CertificationsPage = () => (
    <div className="photo-box">

        <div className="heading">Check out the certifications I've recieved</div>

        <div className="project">
            <Modal trigger={<FccRwd className="project-image">Show Modal</FccRwd>}>
                <Modal.Header className='modal-header'>Responsive Web Design</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>

                        <p>
                            In this course I learned HTML5, Flexbox, CSS Grids, Applied Visual Design, and Web Design Principles.
                        </p>


                    </Modal.Description>
                </Modal.Content>
            </Modal>

            <Modal trigger={<FccJs className="project-image">Show Modal</FccJs>}>
                <Modal.Header className='modal-header'> JavaScript Algorithms and Data Structures </Modal.Header>
                <Modal.Content image>
                    <Modal.Description>

                        <p>
                            In this course I learned how to use Regular Expressions, ES6, basic Data Structures,
                            Algorithm Scripting, Object Oriented Programming, Functional Programming, and basic JavaScript
                        </p>

                    </Modal.Description>
                </Modal.Content>
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




        </div>

    </div>
);

export default CertificationsPage;