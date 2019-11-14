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
		return new Intl.DateTimeFormat('en-US', options).format(parsedDate);
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
				    	<img src={`https://www.metaweather.com//static/img/weather/png/64/${item.weather_state_abbr}.png`}/>
				    </h5>
			    	<h5 className="card-title">
			    		Temp:{convertTemp(item.the_temp)}
			    	</h5>
			    	<h6 className="card-subtitle mb-2 text-muted"> 
			    		Lo: {convertTemp(item.min_temp)} - Hi: {convertTemp(item.max_temp)}
			    	</h6>

				    <h5 className="card-title">Humidity: {item.humidity}</h5>
				    <p className="card-text"></p>
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