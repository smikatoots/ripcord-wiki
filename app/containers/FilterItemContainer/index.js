import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/HOCAction';
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

  componentDidMount() {
    axios.get('/icon')
    .then(res => {
      this.props.changeFilter("all", res.data);
    });
  }

  changeFilter(filter) {
    axios.get(`/icon`)
    .then(res => {
      const iconDetails = res.data;
      var filteredIconDetails;
      if (filter === "all") {
        filteredIconDetails = iconDetails;
      } else {
        filteredIconDetails = iconDetails.filter((icon) => {
          console.log(icon.department === filter);
          return icon.department === filter
        });
      }

      this.props.changeFilter(filter, filteredIconDetails);
    })

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

export default ContainerEnhancer(FilterItemContainer, actions);
