import { combineReducers } from 'redux'
import { productsReducer } from './products.reducer'
import { cartReducer } from './cart.reducer'

const reducers = {
  products: productsReducer,
  cart: cartReducer
}

export default combineReducers(reducers)
