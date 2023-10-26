import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';

function AddOffer(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <Form.Group style={{marginTop:"20px"}}>
                <Form.Label>Section</Form.Label>
                <Form.Control type="text" placeholder="Section Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" style={{marginTop:"20px"}}>
                <Form.Label>Select P. Category</Form.Label>
                <Form.Control as="select">
                    <option>Select P. Category</option>
                    <option>Unpublish</option>
                </Form.Control>
            </Form.Group>
            <Form.Group style={{marginTop:"20px"}}>
                <Form.Label>Services</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" style={{marginTop:"20px"}}>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                    <option>Publish</option>
                    <option>Unpublish</option>
                </Form.Control>
            </Form.Group>
            <Form.Group style={{marginTop:"20px", width:"20%"}}>
                <Button variant="primary" type="submit">
                    Save Category
                </Button>
            </Form.Group>
         </Form>
        </Modal.Body>
      </Modal>
    );
  }

  export default AddOffer;