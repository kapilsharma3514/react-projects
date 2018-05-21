import React from 'react';
import CategoryItems from './CategoryItems';

class Categories extends React.Component {

  addItem(item) {
    alert('Add item Super Parent');
    this.props.addToCart(item);
  }

  render() {
    let link = '#' + this.props.categories[0];
    let cItems = this.props.categories.map(x => {
      return (
        <CategoryItems key={x} itemName={x} />
      );
    });
    return (
      <div class="category-section">
        <div className="categoryDiv selected-div"><a href={link}>All</a></div>
        {cItems}
      </div>
    );
  }
};

export default Categories;
