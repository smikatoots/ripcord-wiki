import * as types from '../constants/ActionTypes';

const initialState = false;

export default function toggleFeedbackModal(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_FEEDBACK_MODAL:
      console.log('FEEDBACK MODAL ACTION', action);
      const newState = action.bool
      return newState;
    default:
      return state;
  }
}
