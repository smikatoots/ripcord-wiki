import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {

  return (
    <div className="icon">
      <img src="https://www.gstatic.com/webp/gallery3/1.png"/>
      <div>{props.fname} {props.lname}</div>
      <div>{props.title}, {props.department}</div>
    </div>
  );
};

Icon.defaultProps = {

};

Icon.propTypes = {
};

export default Icon;
