import React, { Component } from 'react';

class ProjectsItem extends Component {
  deleteItem(id) {
    alert('Delete req');
    console.log('Item Requested to be deleted with id '+id);
    this.props.onDelete(id);
  }

  render() {

    return (
      <li className="ProjectsItem">
      <strong>{this.props.project.title}</strong> - {this.props.project.captain} ({this.props.project.id}) <a href="#" onClick={this.deleteItem.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectsItem;
