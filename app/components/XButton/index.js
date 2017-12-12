import React from 'react';
import PropTypes from 'prop-types';
import {
} from '../../components';

const XButton = props => {
  return (
    <div className="x-button">
      <button
        className="modal-button"
        onClick={() => props.closeModal(false)}
      >x</button>
    </div>
  );
};

XButton.defaultProps = {

};

XButton.propTypes = {
};

export default XButton;
