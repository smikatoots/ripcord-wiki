import * as types from '../constants/ActionTypes';

const initialState = {
  fname: "",
  lname: "",
  title: "",
  department: "",
};

export default function changeModalDetails(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_MODAL_DETAILS:
      const newState = { fname: "mika2", lname: "reyes1"}
      return newState;
    default:
      return state;
  }
}
