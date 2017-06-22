export const actionTypes = {
  LOAD: '[Products] Load',
  LOAD_SUCCESS: '[Products] Load Success',
  LOAD_ERROR: '[Products] Load Error',
}

export function load() {
  return {
    type: actionTypes.LOAD
  }
}

export function loadSuccess(data) {
  return {
    type: actionTypes.LOAD_SUCCESS,
    payload: data
  }
}

export function loadError(message) {
  return {
    type: actionTypes.LOAD_ERROR,
    payload: message
  }
}
