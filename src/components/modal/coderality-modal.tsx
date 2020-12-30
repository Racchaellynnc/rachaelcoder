import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modal-styles.scss';

interface Props {
  props: any
}

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
        <Modal.Body >
          <h4>What I did at Coderality</h4>
          <p className="modal-p">
            I made an e-commerce store that sells Programming T-Shirts and a Tech Blog. This website was built using React, 
						Redux, Hooks, HOC, Node.JS GraphQL, StripeAPI, ContextAPI, GoogleMapsAPI and Firebase. This is a personal project of mine and was designed 
						and built 100% by myself. I used Adobe XD to design mock-ups and Adobe Illustrator to design the logo, graphics and 
						svg images. I also integrated React Helmet to enable SEO into the webpages.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
  function CoderalityModal() {
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

  export default CoderalityModal;