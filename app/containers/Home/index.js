import React from 'react';
import * as actions from '../../actions/HomePage';
import {
  Test,
  FilterGroup,
  Header,
} from '../../components';
import IconGroupContainer from '../../containers/IconGroupContainer';
import FilterItemContainer from '../../containers/FilterItemContainer';
import {ContainerEnhancer} from '../../HOC';

class Home extends React.Component {
  render() {

    return (
      <div className="home-page">
        <Header/>
        <FilterGroup/>
        <IconGroupContainer/>
      </div>
    );
  }
}

export default ContainerEnhancer(Home, actions);
