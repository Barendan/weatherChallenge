import React, { Component } from 'react';

// const PROXY = 'https://cors-anywhere.herokuapp.com/';
const woeidAPI = 'https://www.metaweather.com/api/location/search/?query=';
const weatherAPI = 'https://www.metaweather.com/api/location/';
const DEFAULT_QUERY = 'san';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(woeidAPI + DEFAULT_QUERY)
      .then(res => res.json())

      .then((data) => {
          fetch( weatherAPI + data[0].woeid )
          .then( res => res.json())
          
          .then ((data) => {
            this.setState({
              data : data
            })
              // console.log(data)
          })


        // console.log(data);
        // console.log(data[0].woeid)
      })
      .catch(console.log);
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        <h3>
        {data.title}
        {console.log(data)}
        </h3>

        <ul>
          {data.consolidated_weather.map(data =>
            <li key={data.id}>
              {data.air_pressure}
              {data.humidity}
              {data.max_temp}
              {data.min_temp}
              {data.the_temp}
              {data.visibility}
              {data.weather_state_name}
              {data.wind_speed}
            </li>
          )}
        </ul>
      </div>
    );
  }


}

export default Form;