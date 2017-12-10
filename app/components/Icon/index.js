import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  return (
    <div
    onClick={() => props.openModal(true, props.id)}
    className="icon">
        <img src={props.pic}/>
        <div>{props.fname} {props.lname}</div>
        <div>{props.title}</div>
    </div>
  );
};

Icon.defaultProps = {

};

Icon.propTypes = {
};

export default Icon;
