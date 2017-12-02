import * as types from '../constants/ActionTypes';

// export function reset() {
//   return {
//     type: types.RESET
//   };
// }

export function changeFilter(filter, iconDetails) {
  return {
    type: types.CHANGE_FILTER,
    filter,
    iconDetails
  };
}
