import React, { Component } from 'react';
import ProjectsItem from './ProjectsItem';

class Projects extends Component {

  deleteProject(id) {
    console.log('hi');
    this.props.onDelete(id);
  }

  render() {
    let pItems;
    if (this.props.projects) {
      pItems = this.props.projects.map(x => {
        //console.log(x);
        return (
          <ProjectsItem onDelete={this.deleteProject.bind(this)} key={x.title}  project = {x} />
        );
      });
    }
    return (
      <div className="Projects">
        MyProject
        {this.props.parameter}
        {pItems}
      </div>
    );
  }
}

export default Projects;
