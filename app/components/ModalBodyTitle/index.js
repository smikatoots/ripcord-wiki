import React from 'react';
import PropTypes from 'prop-types';
import {
  // Icon,
} from '../../components';

const ModalBodyTitle = props => {
  return (
    <div className="title">
      {props.text}
    </div>
  );
};

ModalBodyTitle.defaultProps = {

};

ModalBodyTitle.propTypes = {
};

export default ModalBodyTitle;
