import React from 'react';

class CartList extends React.Component {
  render() {
    return (
      <div className="row cart-row">
        <div className="col-md-6 text-left">{this.props.cart.name}</div>
        <div className="col-md-3">X {this.props.cart.count}</div>
        <div className="col-md-3 text-right"><i className="fa fa-inr"></i>{this.props.cart.price * this.props.cart.count}</div>
      </div>
    );
  }
};

export default CartList;
