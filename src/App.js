import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    const eachProduct = this.props.products.map((product) => (<h4>{product.name}</h4>))

    return (
      <div className="App">
        {eachProduct}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    productsLoading: state.products.loading
  }
}

export default connect(mapStateToProps)(App)
