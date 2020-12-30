import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './modal-styles.scss';
import { Modal, Button } from 'react-bootstrap';

function ModalComponent(props : any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h4>What I did at Lavish Web</h4>
          <p className="modal-p">
          I worked on Lavish Web during and built the Landing Page, Job Board, and part of the Blog. I designed and built UI/UX code for several projects on a
							team of developers. I built applications using HTML, CSS,
							Node, and JavaScript. I used React and Vue for building
							SPA functionality. I was trained to use proper coding standards,
							code documentation, and proper technologies for
							maintaining codebase. I Gained experience with Firebase,
							Google Cloud, Github, Bitbucket, Jira and Asana. I worked
							in an Agile environment.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function LwModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div className="learn-more" onClick={() => setModalShow(true)}>
          LEARN MORE
        </div>
  
        <ModalComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default LwModal;