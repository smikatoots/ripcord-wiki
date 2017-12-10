import React from 'react';
import PropTypes from 'prop-types';
import {
  // Icon,
} from '../../components';

const ModalBodyContent = props => {
  return (
    <div className="content">
      {props.text}
    </div>
  );
};

ModalBodyContent.defaultProps = {

};

ModalBodyContent.propTypes = {
};

export default ModalBodyContent;
