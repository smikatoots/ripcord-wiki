import React from 'react';
import PropTypes from 'prop-types';
import FeedbackButtonContainer from '../../containers/FeedbackButtonContainer';

const Header = props => {

  return (
    <div className="header">
      <img src="uploads/logo.png"/>
      <FeedbackButtonContainer />
    </div>
  );
};

Header.defaultProps = {
};

Header.propTypes = {
};

export default Header;
