import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../../actions/HOCAction';
import {
  FeedbackModal,
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class FeedbackModalContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  closeModal(bool) {
    console.log('CLOSE MODAL BOOL', bool);
    this.props.toggleFeedbackModal(bool)
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.feedbackmodal}
          contentLabel="Feedback Modal"
          ariaHideApp={false}
          className="feedback-modal"
          >
          <FeedbackModal
            closeModal={(bool) => this.closeModal(bool)}
          />

        </Modal>
      </div>
    );
  }
}

export default ContainerEnhancer(FeedbackModalContainer, actions);
