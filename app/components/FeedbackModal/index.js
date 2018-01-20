import React from 'react';
import PropTypes from 'prop-types';
import {
  XButton,
  FeedbackForm
} from '../../components';

const FeedbackModal = props => {
  return (
    <div className="modal-content">
      <FeedbackForm closeModal={(bool) => props.closeModal(bool)} />
      <XButton closeModal={(bool) => props.closeModal(bool)} />
    </div>
  );
};

FeedbackModal.defaultProps = {

};

FeedbackModal.propTypes = {
};

export default FeedbackModal;
