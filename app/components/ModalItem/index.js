import React from 'react';
import PropTypes from 'prop-types';
import {
  // Icon,
} from '../../components';

const ModalItem = props => {
  return (
    <div className="modal-item">
      <div>I AM A MODAL!!!!</div>
      {props.fname}
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
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
