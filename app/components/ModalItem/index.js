import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalHeader,
  ModalBody
} from '../../components';

const ModalItem = props => {
  return (
    <div className="modal-content">
      <ModalHeader modalDetails={props.modalDetails}/>
      <ModalBody modalDetails={props.modalDetails}/>
      <button
        className="modal-button"
        onClick={() => props.closeModal(false)}
      >x</button>
    </div>
  );
};

ModalItem.defaultProps = {

};

ModalItem.propTypes = {
};

export default ModalItem;
