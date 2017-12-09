import React from 'react';
import PropTypes from 'prop-types';
import {
  // Icon,
} from '../../components';

const ModalItem = props => {
  return (
    <div className="modal-item">
      <div>I AM A MODAL!!!!</div>
      <div>{props.modalDetails.fname}</div>
      <div>{props.modalDetails.lname}</div>
      <div>{props.modalDetails.department}</div>
      <div>{props.modalDetails.title}</div>
      <button
        className="icon-item"
        onClick={() => props.closeModal(false)}
      >X</button>
    </div>
  );
};

ModalItem.defaultProps = {

};

ModalItem.propTypes = {
};

export default ModalItem;
