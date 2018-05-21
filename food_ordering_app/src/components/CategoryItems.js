import React from 'react';

class CategoryItems extends React.Component {

  render() {
    let link = '#' + this.props.itemName;
    return (
      <div className="categoryDiv"><a href={link}> {this.props.itemName} </a></div>
    );
  }
};

export default CategoryItems;
