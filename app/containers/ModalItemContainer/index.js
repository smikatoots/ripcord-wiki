import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../../actions/HOCAction';
import {
  ModalItem,
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class ModalItemContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  closeModal(bool) {
    this.props.toggleModal(bool)
    this.props.changeModalDetails({})
  }

  render() {
    return (
      <div>
      <Modal
          isOpen={this.props.modal}
          contentLabel="Employee Modal"
          ariaHideApp={false}
          className="modal"
          >
          <ModalItem
            modalDetails={this.props.modaldetails}
            closeModal={(bool) => this.closeModal(bool)}
          />
        </Modal>
      </div>
    );
  }
}

export default ContainerEnhancer(ModalItemContainer, actions);
