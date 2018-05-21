import React, { Component } from 'react';
//import logo from './logo.svg';
import Projects from './Components/Projects';
import './App.css';
import AddProject from './Components/AddProject';
import Todo from './Components/Todo';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  loadProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Delhi Daredevils",
        captain: "S Iyer"
      },
      {
        id: uuid.v4(),
        title: "Sunrisers Hyderabad",
        captain: "K Williamson"
      },
      {
        id: uuid.v4(),
        title: "Chennai Super Kings",
        captain: "MS Dhoni"
      }
    ]});
  }

  loadData() {
    $.ajax({
      url: 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log("API Called " + this.state.todos);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  //Life cycle method to define data
  //fires everytime component is rerendered
  //state is mutable.. not changeable
  componentWillMount() {
    this.loadProjects();
    this.loadData();
  }

  ComponentDidMount() {
    this.loadData();
  }

  handleAddProject(project) {
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    // now resetting the state as its mutable
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    //console.log("Reques to delete "+id);
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }


  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <br/>
        <h3>Latest Projects</h3>
        <br/>
        <Projects parameter="Parameter Passed" projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <br/>
        <hr/>
        <Todo todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
