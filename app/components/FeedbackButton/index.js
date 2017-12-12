import React from 'react';
import PropTypes from 'prop-types';
import {
} from '../../components';

const FeedbackButton = props => {
  return (
    <div>
      <button className="feedback-button"
        onClick={() => props.openModal(true)}>
        leave feedback
      </button>
    </div>
  );
};

FeedbackButton.defaultProps = {

};

FeedbackButton.propTypes = {
};

export default FeedbackButton;
