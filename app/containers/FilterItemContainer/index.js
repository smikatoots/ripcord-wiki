import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/HomePage';
// import { changeFilter } from '../../actions/HomePage';
import {
  FilterItem,
  Test
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class FilterItemContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  changeFilter(filter) {
    console.log('CURRENT FILTER', this.props.currentFilter);
    this.props.changeFilterProp(filter);
  }

  render() {
    return (
      <div>
          <FilterItem
          filterItemCategory={this.props.filterItemCategory}
          changeFilter={() => this.changeFilter(this.props.filterItemCategory)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      currentFilter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      changeFilterProp: (filter) => dispatch(actions.changeFilter(filter)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterItemContainer);

// export default ContainerEnhancer(FilterItemContainer, actions);
