import * as types from '../constants/ActionTypes';

const initialState = false;

export default function toggleModal(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      const newState = action.bool
      return newState;
    default:
      return state;
  }
}
