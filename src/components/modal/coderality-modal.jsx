import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modal-styles.scss';

  function ModalComponent(props) {
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
          <h4>Centerasdfasdfased Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
  function CoderalityModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>

        <div className="learn-more" variant="primary" onClick={() => setModalShow(true)}>
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