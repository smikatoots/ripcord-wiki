import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBodyTitle,
  ModalBodyContent
} from '../../components';

const ModalFact = props => {
  return (
    <div className="modal-fact">
      <ModalBodyTitle text="fun fact:"/>
      <ModalBodyContent text={props.modalDetails.fact}/>
    </div>
  );
};

ModalFact.defaultProps = {

};

ModalFact.propTypes = {
};

export default ModalFact;
