import React from 'react';
import CartList from './CartList';

class Cart extends React.Component {

  emptyCart() {
    this.props.emptyMyCart();
  }

  render() {
    let price=0;
    let displayCartList = this.props.cart.map(x => {
      price = price + parseInt(x.price)*parseInt(x.count);
      return (
        <CartList key={x.name} cart={x} />
      );
    });

    return (
      <div>
        <div className="topDiv">
          <span className="pull-left">Your Cart</span>
          <span className="pull-right" onClick={this.emptyCart.bind(this)}><i className="glyphicon glyphicon-remove"></i></span>
        </div>
        <div className="mid-section">
          {displayCartList}
          <div className="row totalRow">
            <div className="col-md-6 text-left"><b>TOTAL</b></div>
            <div className="col-md-3"></div>
            <div className="col-md-3 text-right"><b><i className="fa fa-inr"></i>{price}</b></div>
          </div>

        <button className="btn btn-info top-bottom-margins">CHECKOUT</button>
        </div>
      </div>
    );
  }
};

export default Cart;
