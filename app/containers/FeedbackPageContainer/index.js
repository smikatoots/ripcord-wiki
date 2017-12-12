import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/HOCAction';
import {
  FeedbackPage
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class FeedbackPageContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   feedback: {}
    // }
  }

  componentDidMount() {
    axios.get('/feedback')
    .then(res => {
      console.log('RES', res);
      // this.setState(res.data);
    });
  }

  render() {
    return (
      <div>
          FEEDBACKPAGE
          // {this.state.feedback}
      </div>
    );
  }
}

export default ContainerEnhancer(FeedbackPageContainer, actions);
