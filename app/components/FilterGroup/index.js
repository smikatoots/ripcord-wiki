import React from 'react';
import PropTypes from 'prop-types';
import {
  FilterItem,
} from '../../components';

const FilterGroup = props => {

  return (
    <div className="filter-group">
      <FilterItem filterItemCategory="all"/>
      <FilterItem filterItemCategory="executives"/>
      <FilterItem filterItemCategory="sales & marketing"/>
      <FilterItem filterItemCategory="engineering"/>
      <FilterItem filterItemCategory="operations"/>
      <FilterItem filterItemCategory="human resources"/>
    </div>
  );
};

FilterGroup.defaultProps = {
};

FilterGroup.propTypes = {
};

export default FilterGroup;
