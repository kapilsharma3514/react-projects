import React from 'react';

//using class component
/*class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && <p>Location: { this.props.city }, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.error && <p>Error: {this.props.error}</p>}
      </div>
    );
  }
};*/

//now using statless functional component
/*const Weather = (props) => { //no class => cant use this keyword, pass props arg
  return (
    <div>
      {props.city && props.country && <p>Location: { props.city }, {props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
      {props.error && <p>Error: {props.error}</p>}
    </div>
  );
};*/


//If only returning one elements.. like only one div..
const Weather = props => ( //explicitly returning something from error func.. can also get rid of () if one arg is passed
  <div className="weather__info">
    {
      props.city && props.country && <p class="weather__key">Location:
      <span class="weather__value">{ props.city }, {props.country}</span></p>
    }
    {
      props.temperature && <p class="weather__key">Temperature:
      <span class="weather__value">{props.temperature}</span></p>
    }
    {
      props.humidity && <p class="weather__key">Humidity:
      <span class="weather__value">{props.humidity}</span></p>
    }
    {
      props.description && <p class="weather__key">Conditions:
      <span class="weather__value">{props.description}</span></p>
    }
    {
      props.error && <p class="weather__error">Error: {props.error}</p>
    }
  </div>
);

export default Weather;
//if else not allowed in React(in return), Use and operator instead
