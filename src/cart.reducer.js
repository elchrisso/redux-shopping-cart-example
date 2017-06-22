const initialState = {
  products: [],
  total: 0.00
}

export function cartReducer (state = initialState, action) {
  switch (action.type) {
    case 'addProducts':
      console.log("hello i am the cart")
    default:
      return state
  }
}