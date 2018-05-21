import React from 'react';

/*class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City" ref="city" />
        <input type="text" name="country" placeholder="Country" ref="country" />
        <button>Get Weather</button>
      </form>
    );
  }
};*/

const Form = props => ( //stateless functions cant have refs
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <input type="text" name="country" placeholder="Country" />
    <button>Get Weather</button>
  </form>
);

export default Form;
