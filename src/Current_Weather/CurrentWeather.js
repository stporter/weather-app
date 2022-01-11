import React, { useState } from 'react';
import './CurrentWeather.css';
import Navigation from '../Navigation/Navigation';

function Currentweather(props) {
	const [searchCurrentWeather, setCurrentWeatherSearch] = useState('');
	const [currentWeather, setCurrentWeather] = useState(null);
	const apiKey = process.env.REACT_APP_WEATHER_KEY;

	const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCurrentWeather}`;

	// const [searchCurrentWeather, setCurrentWeatherSearch] = useState('');
	// const [currentWeather, setCurrentWeather] = useState(null);

	function handleSubmit(event) {
		showCurrentWeather();
		event.preventDefault();
	}

	function showCurrentWeather() {
		fetch(apiUrl)
			.then((response) => response.json())
			.then((response) => {
				setCurrentWeather(response);
			})
			.catch(console.error);
		console.log('Loading Info');
	}

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
				<div className='date-and-time'>Date:</div>
			</div>
			{/* <div className='more-details'>
				<button className='more-details-button'>More Details</button>
			</div> */}
		</div>
	);
}

export default Currentweather;
