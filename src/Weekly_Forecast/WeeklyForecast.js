import React, { useState } from 'react';
import './WeeklyForecast.css';

function WeeklyForecast() {
	const [searchWeeklyForecast, setWeeklyForecast] = useState('');
	const [weeklyWeather, setWeeklyWeather] = useState(null);
	const apiKey = process.env.REACT_APP_WEATHER_KEY;

	function handleSubmit(event) {
		showWeeklyWeather();
		event.preventDefault();
	}

	function handleChange(event) {
		setWeeklyForecast(event.target.value);
		console.log(event.target.value);
		event.preventDefault();
	}

	function showWeeklyWeather() {
		const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchWeeklyForecast}&days=5&aqi=no&alerts=no
`;
		fetch(apiUrl)
			.then((response) => response.json())
			.then((response) => {
				setWeeklyWeather(response);
			})
			.catch(console.error);
		console.log('Loading Info');
	}

	return (
		<div className='weekly-forecast-box'>
			<form
				className='search-weekly-weather-form'
				onSubmit={handleSubmit}
				onChange={handleChange}>
				{/* <input
					placeholder='Search by city/zipcode'
					type='text'
					name='searchString'
					className='search-location'
					required
					onChange={handleChange}
				/> */}
			</form>
			<div className='weekly-forecast-box'></div>
			<div className='weekly-forecast-header'>Weekly Forecast</div>
			<ul className='each-day-forecast'>
				<li> Day 1: {weeklyWeather?.forecast.forecastday[0].day.maxtemp_f} </li>
				<li> Day 2: {weeklyWeather?.forecast.forecastday[1].day.maxtemp_f}</li>
				<li> Day 3: {weeklyWeather?.forecast.forecastday[2].day.maxtemp_f}</li>
			</ul>
		</div>
	);
}

export default WeeklyForecast;
