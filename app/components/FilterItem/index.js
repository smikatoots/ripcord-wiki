import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = props => {
  return (
    <button
      className="filter-item"
      onClick={() => props.changeFilter(`${props.filterItemCategory}`)}
    >
      {props.filterItemCategory}
    </button>
  );
};

FilterItem.defaultProps = {
};

FilterItem.propTypes = {
};

export default FilterItem;
