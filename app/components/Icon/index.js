import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  return (
    <div
    onClick={() => props.openModal(true, props.id)}
    className="icon">
        <img src={`uploads/pics/${props.pic}`}/>
        <div className="icon-name">{props.fname} {props.lname}</div>
        <div className="icon-title">{props.title}</div>
    </div>
  );
};

Icon.defaultProps = {

};

Icon.propTypes = {
};

export default Icon;
