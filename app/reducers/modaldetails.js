import * as types from '../constants/ActionTypes';

const initialState = {};

export default function changeModalDetails(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_MODAL_DETAILS:
      console.log('modal', action.modalDetails);
      const newState = action.modalDetails;
      return newState;
    default:
      return state;
  }
}
