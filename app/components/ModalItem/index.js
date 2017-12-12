import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalHeader,
  ModalBody,
  XButton
} from '../../components';

const ModalItem = props => {
  return (
    <div className="modal-content">
      <ModalHeader modalDetails={props.modalDetails}/>
      <ModalBody modalDetails={props.modalDetails}/>
      <XButton closeModal={(bool) => props.closeModal(bool)} />
    </div>
  );
};

ModalItem.defaultProps = {

};

ModalItem.propTypes = {
};

export default ModalItem;
