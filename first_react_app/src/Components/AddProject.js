import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    captain: ['A Rahane', 'V Kohli', 'R Sharma', 'R Ashwin']
  }

  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("Title Required");
    }
    else {
      //console.log(this.refs.title.value);
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          captain: this.refs.captain.value
        }
      }, function() {
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault(); //actually submitting a form, so to negate that.. do this
  }

  render() {
    let captainOptions = this.props.captain.map(x => {
      return <option key={x} value={x}>{x}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}> //to use this in handleSubmit
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Captain</label><br/>
            <select ref="captain">
              {captainOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
