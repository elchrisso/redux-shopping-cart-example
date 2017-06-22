import { actionTypes } from './cart.actions'

const initialState = {
  products: [],
  total: 0.00
}

export function cartReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      initialState.total += 1
      return {
        state
      }
    default:
      return state
  }
}