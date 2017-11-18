import * as types from '../constants/ActionTypes';

const initialState = "all";

export default function changeFilter(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_FILTER:
      console.log('action filter', action.filter);
      return action.filter;
    default:
      return state;
  }
}
