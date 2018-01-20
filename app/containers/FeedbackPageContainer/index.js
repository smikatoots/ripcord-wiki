import React from 'react';
import axios from 'axios';
import * as actions from '../../actions/HOCAction';
import {
  FeedbackPage
} from '../../components';
import {ContainerEnhancer} from '../../HOC';


class FeedbackPageContainer extends React.Component {

  render() {
    return (
      <div>
          "FEEDBACKPAGE AISJHDLKASJDLKASJDLKAD"
      </div>
    );
  }
}

export default ContainerEnhancer(FeedbackPageContainer, actions);
