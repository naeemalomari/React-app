




import React, { PureComponenet } from "react";
import { Modal, Button } from "react-bootstrap";
import Main from "./Main";



class SelectedBeast extends PureComponenet {
  render() {
    return (
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          I like that thanks a lot 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.viewFunction}>Close</Button>
      </Modal.Footer>

);
  }
}
export default SelectedBeast;
