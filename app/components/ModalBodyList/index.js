import React from 'react';
import PropTypes from 'prop-types';
import {
  // Icon,
} from '../../components';

const ModalBodyList = props => {
  return (
    <ul className="content">
      {props.array.map(item =>
        <li key={item}>{item}</li>
      )}
    </ul>
  );
};

ModalBodyList.defaultProps = {

};

ModalBodyList.propTypes = {
};

export default ModalBodyList;
