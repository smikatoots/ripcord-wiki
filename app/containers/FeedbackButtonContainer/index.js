import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/HOCAction';
import {
  Icon,
  IconGroup,
  FeedbackButton
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class FeedbackButtonContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('state', this);
  }

  openModal(bool) {
    console.log('FEEDBACK BOOL', bool);
    this.props.toggleFeedbackModal(bool);
  }

  render() {
    return (
      <div>
        <FeedbackButton openModal={(bool) => this.openModal(bool)}/>
      </div>
    );
  }
}

export default ContainerEnhancer(FeedbackButtonContainer, actions);
