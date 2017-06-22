import { actionTypes } from './products.actions'

const initialState = {
  loading: false,
  errorMessage: '',
  data: ["product1"]
}

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD:
      return {
        loading: true,
        data: []
      }

    case actionTypes.LOAD_SUCCESS:
      return {
        loading: false,
        data: action.payload
      }

    case actionTypes.LOAD_ERROR:
      return {
        data: [],
        loading: false,
        errorMessage: action.payload
      }

    default:
      return state
  }
}