import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from '../../components';

const IconGroup = props => {

  return (
    <div className="icon-group">
      {props.iconDetails.map(icon =>
        <Icon
        key={icon._id}
        fname={icon.fname}
        lname={icon.lname}
        title={icon.title}
        department={icon.department}
        />
      )}
    </div>
  );
};

IconGroup.defaultProps = {

};

IconGroup.propTypes = {
};

export default IconGroup;
