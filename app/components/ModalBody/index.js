import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBio,
  ModalColumn,
  ModalFact
} from '../../components';

const ModalBody = props => {
  return (
      <div className="modal-body">
        <ModalBio modalDetails={props.modalDetails}/>
        <ModalColumn modalDetails={props.modalDetails}/>
        <ModalFact modalDetails={props.modalDetails}/>
      </div>
  );
};

ModalBody.defaultProps = {

};

ModalBody.propTypes = {
};

export default ModalBody;
