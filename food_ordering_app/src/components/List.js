import React from 'react';
import ListCategories from './ListCategories';

class List extends React.Component {

  addItem(item, count) {
    this.props.addToCart(item, count);
  }

  deleteItem(item, count) {
    //alert('Super Parent '+item.name + ' count '+count);
    this.props.deleteFromCart(item, count);
  }

  render() {

    let cItems = this.props.categories.map(x => {
      return (
        <ListCategories deleteFromCart={this.deleteItem.bind(this)} addToCart={this.addItem.bind(this)} key={x} cName={x} foodItems={this.props.foodItems} />
      );
    });

    return (
      <div className="list-div">
        {cItems}
      </div>
    );
  }
};

export default List;
