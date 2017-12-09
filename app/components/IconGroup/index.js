import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from '../../components';
import IconContainer from '../../containers/IconContainer';

const IconGroup = props => {
  return (
    <div className="icon">
      <IconContainer
        iconDetails={props.iconDetails}
      />
    </div>
  );
};

IconGroup.defaultProps = {

};

IconGroup.propTypes = {
};

export default IconGroup;
