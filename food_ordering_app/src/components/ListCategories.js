import React from 'react';
import ListItems from './ListItems';


class ListCategories extends React.Component {

  addItem(item, count) {
    this.props.addToCart(item, count);
  }

  deleteItem(item, count) {
    //alert('Parent ' +item.name + ' count '+count);
    this.props.deleteFromCart(item, count);
  }

  render() {
      //let ccName=this.props.cName;
      //console.log("ccname is "+ccName);
      let fItem = this.props.foodItems.map(x => {
        return (
          <div>
          { this.props.cName===x.category &&
            <ListItems deleteFromCart={this.deleteItem.bind(this)} onAdd={this.addItem.bind(this)} key={x.name} foodItem={x} />
          }
          </div>
        );
      });
    return (
      <div>
        <div className="list-heading" id={this.props.cName}> {this.props.cName} </div>
        <div className="list-items-container">
          {fItem}
        </div>
      </div>
    );
  }
};

export default ListCategories;
