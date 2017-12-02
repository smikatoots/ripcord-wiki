import * as types from '../constants/ActionTypes';

const initialState = [
  "all", []
];

export default function changeFilter(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_FILTER:
      // const newState = Object.assign({}, state, filter: action.filter, iconDetails: action.iconDetails)
      const newState = [action.filter, action.iconDetails]
      console.log('action filter', action.filter);
      console.log('action iconDetails', action.iconDetails);
      console.log('newstate', newState);
      return newState;
    default:
      return state;
  }
}
