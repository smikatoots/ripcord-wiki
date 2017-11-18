import React from 'react';
import PropTypes from 'prop-types';
import {
  FilterItem,
} from '../../components';
import FilterItemContainer from '../../containers/FilterItemContainer';

const FilterGroup = props => {

  return (
    <div className="filter-group">
      <FilterItemContainer filterItemCategory="all"/>
      <FilterItemContainer filterItemCategory="executives"/>
      <FilterItemContainer filterItemCategory="sales & marketing"/>
      <FilterItemContainer filterItemCategory="engineering"/>
      <FilterItemContainer filterItemCategory="operations"/>
      <FilterItemContainer filterItemCategory="human resources"/>
    </div>
  );
};

FilterGroup.defaultProps = {
};

FilterGroup.propTypes = {
};

export default FilterGroup;
