import React, { Component } from "react";

import WeatherCard from '../components/weatherCard';

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const woeidAPI = 'https://www.metaweather.com/api/location/search/?query=';
const weatherAPI = 'https://www.metaweather.com/api/location/';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          city:"",
          data: [],
          weatherForecast: []
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInput = (e) => {
        let value = e.target.value;
        this.setState({
            city: value
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let city = this.state.city;

        fetch(PROXY + woeidAPI + city)
          .then(res => res.json())
          .then((data) => {
              fetch( PROXY + weatherAPI + data[0].woeid )
              .then( res => res.json())
              .then ((data) => {
                let weatherForecast = data.consolidated_weather;
                this.setState({
                  city: "",
                  data : data,
                  weatherForecast
                })
              })

          })
          .catch(console.log);
    }

    displayWeather = () => {
        return this.state.weatherForecast.length > 1 ?
          <div className="weatherCardList mt-5">
              <center><h2 className="font-weight-300">Weather Forecast for {this.state.data.title} </h2></center>
              <WeatherCard weatherForecast={this.state.weatherForecast} />
          </div>
        : null
    }

  render() {
    return (
      <form className="container-fluid mx-auto mt-5" onSubmit={this.handleFormSubmit}>
        
        <div className="form-group row mx-5">
          <label className="col-sm-2 col-form-label">
            Check Weather: 
          </label>

          <input
            className="form-control col-sm-6"
            id="city"
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleInput}
            placeholder="Enter a city name"
          />

          <button
            className="btn btn-primary col-sm-3 ml-4"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </div>

        { this.displayWeather() }

      </form>
    );
  }
}

export default FormContainer;