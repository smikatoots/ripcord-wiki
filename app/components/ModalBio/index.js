import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBodyTitle,
  ModalBodyContent
} from '../../components';

const ModalBio = props => {
  return (
    <div className="modal-bio">
      <ModalBodyTitle text="a little about me:"/>
      <ModalBodyContent text={props.modalDetails.bio}/>
    </div>
  );
};

ModalBio.defaultProps = {

};

ModalBio.propTypes = {
};

export default ModalBio;
