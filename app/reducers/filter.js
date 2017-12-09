import * as types from '../constants/ActionTypes';

const initialState = [
  "all", []
];

export default function changeFilter(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_FILTER:
      const newState = [action.filter, action.iconDetails]
      return newState;
    default:
      return state;
  }
}
