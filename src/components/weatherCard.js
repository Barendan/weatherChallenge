import React, { Component } from "react";



const WeatherCard = ( props ) => {

	const createWeatherCard = () => {
		let template = null;
		  
		template = props.weatherForecast.map( (item,i) => (
			<div className="card col-md-2" key={i}>
				<h2 className="day">{item.applicable_date}</h2>
			  	<div className="card-body">
			    	<h5 className="card-title">{item.the_temp}</h5>
			    	<h6 className="card-subtitle mb-2 text-muted"> 
			    		{item.min_temp} - {item.max_temp}
			    	</h6>

				    <h5 className="card-title">{item.weather_state_name}</h5>
				    <h5 className="card-title">{item.humidity}</h5>
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