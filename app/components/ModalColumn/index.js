import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBodyTitle,
  ModalBodyList
} from '../../components';

const ModalColumn = props => {
  return (
    <div className="modal-column">
      <div className="modal-work-desc">
        <ModalBodyTitle text="what do i do at work: "/>
        <ModalBodyList array={props.modalDetails.work}/>
      </div>
      <div className="modal-hobbies">
        <ModalBodyTitle text="hobbies: "/>
        <ModalBodyList array={props.modalDetails.hobbies}/>
      </div>
    </div>
  );
};

ModalColumn.defaultProps = {

};

ModalColumn.propTypes = {
};

export default ModalColumn;
