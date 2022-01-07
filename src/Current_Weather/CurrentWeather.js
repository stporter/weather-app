import React from 'react';
import './CurrentWeather.css';

function Currentweather(props) {
	return (
		<div className='current-weather'>
			{' '}
			<h2 className='current-weather-header'>Current Weather</h2>
			<div className='current-location-box'>
				<div className='current-location'>City</div>
			</div>
			<div className='current-weather-box'>
				<div className='current-temperature'>Temperature</div>
			</div>
			<div className='date-time-box'>
				<div className='date-and-time'>Date/Time</div>
			</div>
		</div>
	);
}

export default Currentweather;
