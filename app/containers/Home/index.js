import React from 'react';
import * as actions from '../../actions/HOCAction';
import {
  Test,
  FilterGroup,
  Header,
  ModalItem
} from '../../components';
import IconGroupContainer from '../../containers/IconGroupContainer';
import FilterItemContainer from '../../containers/FilterItemContainer';
import ModalItemContainer from '../../containers/ModalItemContainer';
import FeedbackModalContainer from '../../containers/FeedbackModalContainer';
import {ContainerEnhancer} from '../../HOC';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header/>
        <FilterGroup/>
        <IconGroupContainer/>
        <ModalItemContainer/>
        <FeedbackModalContainer/>
      </div>
    );
  }
}

export default ContainerEnhancer(Home, actions);
