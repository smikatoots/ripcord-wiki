import * as types from '../constants/ActionTypes';
import Resources from '../constants/resources';

export function test(link) {
  return dispatch => {
    Resources.request
      .get(link)
      .then(response => {
        dispatch(dispatchTest(response));
      });
  };
}

function dispatchTest(data) {
  return {
    type: types.TEST,
    data
  };
}

export function changeFilter(filter) {
  return {
    type: types.CHANGE_FILTER,
    filter
  }
}
