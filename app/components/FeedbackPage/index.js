import React from 'react';
import PropTypes from 'prop-types';

const FeedbackPage = props => {
  return (
    <button
      className="filter-item"
      onClick={() => props.changeFilter(`${props.filterItemCategory}`)}
    >
      {props.filterItemCategory}
    </button>
  );
};

FeedbackPage.defaultProps = {
};

FeedbackPage.propTypes = {
};

export default FeedbackPage;
