import React, { Component } from "react";

const WeatherCard = ( props ) => {

	const convertTemp = (celsius) => {
		let cTemp = celsius;
  		let cToFahr = cTemp * 9 / 5 + 32;

  		return cToFahr.toFixed()
	}

	const getDay = (date) => {
		let parsedDate = new Date(date);
		let options = { weekday: 'long'};
		parsedDate.setDate(parsedDate.getDate() + 1);
		let dayName = new Intl.DateTimeFormat('en-US', options).format(parsedDate);
		return dayName
	}

	const createWeatherCard = () => {
		let template = null;
		  
		template = props.weatherForecast.map( (item,i) => (
			<div className="card col-md-2" key={i}>
				<h3 className="font-weight-light">{getDay(item.applicable_date)}</h3>
			    <h6 className="card-subtitle mb-2 text-muted"> 
			  		{item.applicable_date}
			  	</h6>
			  	<div className="card-body px-1">
				    <h5 className="card-title">
				    	{item.weather_state_name}
				    </h5>
				    	<img alt="weather graphic" src={`https://www.metaweather.com//static/img/weather/png/64/${item.weather_state_abbr}.png`}/>
			    	<h5 className="card-title">
			    		Temp:{" "}{convertTemp(item.the_temp)}{'\u2109'}
			    	</h5>
			    	<h6 className="card-subtitle mb-2 text-muted"> 
			    		Lo:{" "}{convertTemp(item.min_temp)}{'\u2109'} - Hi:{" "}{convertTemp(item.max_temp)}{'\u2109'}
			    	</h6>

				    <h5 className="card-title font-weight-normal">Humidity:{" "}{item.humidity}{'\u0025'}</h5>
			  	</div>
			</div>
		))
		return template
	}
	return (
	    <div className="row">
	    	{ createWeatherCard() }
	    </div>
  	)
};
export default WeatherCard