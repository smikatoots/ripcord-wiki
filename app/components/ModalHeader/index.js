import React from 'react';
import PropTypes from 'prop-types';
import {
  // Icon,
} from '../../components';

const ModalHeader = props => {
  return (
      <div className="modal-header">
        <img src={`uploads/pics/${props.modalDetails.pic}`}/>
        <div>
          <div className="modal-name">{props.modalDetails.fname} {props.modalDetails.lname}</div>
          <div className="modal-title">{props.modalDetails.title} / {props.modalDetails.department}</div>
        </div>
      </div>
  );
};

ModalHeader.defaultProps = {

};

ModalHeader.propTypes = {
};

export default ModalHeader;
