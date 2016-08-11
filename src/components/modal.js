import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalAlert = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
    this.props.hideModal();
  },

  open() {
    this.setState({ showModal: true });
  },

  componentWillReceiveProps(props){
    if(props.alert){
      this.open();
    }
  },

  render() {
    return (
          <Modal show={ this.props.modalConfig ? true : false } onHide={ this.close }>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.modalConfig.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.modalConfig.message}
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={this.close}>Close</Button>
             </Modal.Footer>
           </Modal>
    );
  }
});

export default ModalAlert;
