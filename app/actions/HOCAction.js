import * as types from '../constants/ActionTypes';

export function changeFilter(filter, iconDetails) {
  return {
    type: types.CHANGE_FILTER,
    filter,
    iconDetails
  };
}

export function toggleModal(bool) {
  return {
    type: types.TOGGLE_MODAL,
    bool
  };
}

export function changeModalDetails(modalDetails) {
  return {
    type: types.CHANGE_MODAL_DETAILS,
    modalDetails
  };
}
