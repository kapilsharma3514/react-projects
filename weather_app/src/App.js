import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "3a2c5581e59cd1b85d6168492d09ea5f";

//initialize a component
class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //arrow functions not allowerd until react 16
  //allows you to use this keyword independently
  //earlier had to bind this using constructor
  /*constructor() {
    this.getWeather = this.getWeather.bind(this);
  }
  getWeather() {
  }*/

  getWeather = async (e) => { //e = eventobject in JS
    e.preventDefault();
    //e.refs.name.value
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //async await -- great way of making html calls. web requests made easy
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    //above one is a template string

    //now convert response to JSON.
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        humidity: undefined,
        error: "Please enter some value"
      });
    }
  }

  render() { //render method returns JSX
    //Bable converts this code to JS in background that browser can understand
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  /*setting up a prop*/
                  <Weather temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default App;
//state - an object which lives in a component
//responsible of keeping track of changing data within a component
//no more in constructor
//a key value pair


//stateless functional components (dont contain any state) and class components in react
