import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-fontawesome/css/font-awesome.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Cart from './components/Cart';
import Categories from './components/Categories';
import List from './components/List';

class App extends React.Component {

  getFood = async () => {
    const api_call = await fetch("https://thesmartq.firebaseio.com/menu.json");

    const data = await api_call.json();
    this.setState({foodItems: data});

    var lookup = {};
    var result = [];
    for (var item, i = 0; item = this.state.foodItems[i++];) {
      var name = item.category;
      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push(name);
      }
    }
    this.setState({categories: result});
    console.log("constructor ran");
  }

  tick = () => {
    console.log("Inside tick");
    this.setState({flag: 1});
    //this.setState({secondsElapsed: secondsElapsed});
  }

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 60000);
  }

  componentWillMount = () => {
    this.getFood();
  }

  state = {
    foodItems: [],
    categories: [],
    flag: 0,
    cart: [],
    count: []
  }

  addToCart(item, count) {
    item["count"]=count;
    let cart = this.state.cart;

    let index = cart.findIndex(x => x.name === item.name);
    if (index>=0) {
      cart[index] = item;
    }
    else {
      cart.push(item);
    }
    this.setState({cart: cart});
  }

  deleteInCart(item, count) {
    //alert('Super Duper Parent '+item.name);
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.name === item.name);
    if (count === "" || count === 0) {
      cart.splice(index, 1);
    }
    else {
      cart[index].count = parseInt(count);
    }
    this.setState({cart: cart});
  }

  emptyCart() {
    this.setState({cart: []});
  }

  render() {
    return (
      <div className="container">
        <div className="row page-top-gap"></div>
        <div className="row">
          <div className="col-md-3">
            <Categories key={this.state.categories} categories={this.state.categories} />
          </div>
          <div className="col-md-6">
            <List deleteFromCart={this.deleteInCart.bind(this)} addToCart={this.addToCart.bind(this)} key={this.state.categories} categories={this.state.categories} foodItems={this.state.foodItems} />
          </div>
          <div className="col-md-3">
            <Cart emptyMyCart={this.emptyCart.bind(this)} cart={this.state.cart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
