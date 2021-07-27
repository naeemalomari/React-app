// import React, { PureComponenet } from "react";
// import { Modal, Button } from "react-bootstrap";
// import Main from "./Main";



// class SelectedBeast extends PureComponenet {
//   render() {
//     return (
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           I like that thanks a lot 
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={this.props.viewFunction}>Close</Button>
//       </Modal.Footer>

// );
//   }
// }
// export default SelectedBeast;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component{

  closeModal = () =>{
    this.props.hideModal(false);
  }

  render(){
    return(
      <>
      <Modal show={this.props.showModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.imageUrl} alt={this.props.title} style={{width: '100%', height: '17rem'}}/>
          <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default SelectedBeast;
