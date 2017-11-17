import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = props => {

  return (
    <div className="filter-item">
      {props.filterItemCategory}
    </div>
  );
};

FilterItem.defaultProps = {
};

FilterItem.propTypes = {
};

export default FilterItem;
