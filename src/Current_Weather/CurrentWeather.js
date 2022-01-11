import React, { useState } from 'react';
import './CurrentWeather.css';

function Currentweather(props) {
	const [searchCurrentWeather, setCurrentWeatherSearch] = useState('');
	const [currentWeather, setCurrentWeather] = useState(null);
	const apiKey = process.env.REACT_APP_WEATHER_KEY;

	// const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCurrentWeather}`;

	// const [searchCurrentWeather, setCurrentWeatherSearch] = useState('');
	// const [currentWeather, setCurrentWeather] = useState(null);

	function handleSubmit(event) {
		showCurrentWeather();
		event.preventDefault();
	}

	function handleChange(event) {
		setCurrentWeatherSearch(event.target.value);
		console.log(event.target.value);
		event.preventDefault();
	}

	function showCurrentWeather() {
		const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCurrentWeather}`;
		fetch(apiUrl)
			.then((response) => response.json())
			.then((response) => {
				setCurrentWeather(response);
			})
			.catch(console.error);
		console.log('Loading Info');
	}

	return (
		<div className='search-and-weather'>
			<div>
				<form className='search-weather' onSubmit={handleSubmit}>
					<input
						placeholder='Search by city/zipcode'
						type='text'
						name='searchString'
						className='search-location'
						required
						onChange={handleChange}
					/>
					<button type='submit' className='search-button'>
						Search
					</button>
				</form>
			</div>

			<div className='current-weather'>
				{' '}
				<h2 className='current-weather-header'>Current Weather</h2>
				<div className='current-location-box'>
					<div className='current-location'>
						{currentWeather?.location.name}, {currentWeather?.location.region}
					</div>
				</div>
				<div className='current-weather-box'>
					<div className='current-temperature'>
						{currentWeather?.current.temp_f}
						{'\u00b0'}
						{'F'} {'/'} {currentWeather?.current.temp_c}
						{'\u00b0'}
						{'C'}
					</div>
				</div>
				<div className='date-time-box'>
					<div className='date-and-time'>
						{currentWeather?.location.localtime}
					</div>
				</div>
				<div className='weather-condition-box'>
					<div className='weather-conditions'>
						Current Conditions: {currentWeather?.current.condition.text}
					</div>
				</div>
				{/* <div className='more-details'>
				<button className='more-details-button'>More Details</button>
			</div> */}
			</div>
		</div>
	);
}

export default Currentweather;
