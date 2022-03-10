import React, { useState } from 'react';

import './CurrentWeather.css';

function Currentweather(props) {
	const [searchCurrentWeather, setCurrentWeatherSearch] = useState('');
	const [currentWeather, setCurrentWeather] = useState(null);
	const apiKey = process.env.REACT_APP_WEATHER_KEY;

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
		const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchCurrentWeather}&days=5&aqi=no&alerts=no
`;
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
						placeholder='Search by location/zipcode'
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
						<span>Location: </span>
						{currentWeather?.location.name}, {currentWeather?.location.region}
					</div>
				</div>
				<div className='current-weather-box'>
					<div className='current-temperature'>
						<span>Current Temperature: </span>
						{currentWeather?.current.temp_f}
						{'\u00b0'}
						{'F'} {'/'} {currentWeather?.current.temp_c}
						{'\u00b0'}
						{'C'}
					</div>
				</div>
				<div className='date-time-box'>
					<div className='date-and-time'>
						<span>Current Date/Time: {''}</span>
						{currentWeather?.location.localtime}
					</div>
				</div>
				<div className='weather-condition-box'>
					<div className='weather-conditions'>
						<span> Current Conditions:</span>{' '}
						{currentWeather?.current.condition.text}
					</div>
					<div className='weekly-forecast-box'>
						<h2 className='weekly-forecast-header'> Three day forecast</h2>
						<div className='each-day-forecast'>
							<div className='day-one-forecast'>
								<p className='day-one-p'> Next Day: </p>
								<p>
									Avg Temp:{' '}
									{currentWeather?.forecast.forecastday[0].day.avgtemp_f}{' '}
									{'\u00b0'} {'F'} {'/'}{' '}
									{currentWeather?.forecast.forecastday[0].day.avgtemp_c}{' '}
									{'\u00b0'} {'C'}
								</p>
								<p>
									Condition:{' '}
									{currentWeather?.forecast.forecastday[0].day.condition.text}
								</p>
							</div>
							<div className='day-two-forecast'>
								<p className='day-two-p'> Two days ahead: </p>
								<p>
									{' '}
									Avg Temp:{' '}
									{currentWeather?.forecast.forecastday[1].day.avgtemp_f}
									{'\u00b0'} {'F'} {'/'}{' '}
									{currentWeather?.forecast.forecastday[1].day.avgtemp_c}{' '}
									{'\u00b0'} {'C'}
								</p>
								<p>
									Condition:{' '}
									{currentWeather?.forecast.forecastday[1].day.condition.text}
								</p>
							</div>
							<div className='day-three-forecast'>
								<p className='day-three-p'> Three Days Ahead: </p>
								<p>
									{' '}
									Avg Temp:{' '}
									{currentWeather?.forecast.forecastday[2].day.avgtemp_f}
									{'\u00b0'} {'F'} {'/'}{' '}
									{currentWeather?.forecast.forecastday[2].day.avgtemp_c}{' '}
									{'\u00b0'} {'C'}
								</p>
								<p>
									Condition:{' '}
									{currentWeather?.forecast.forecastday[2].day.condition.text}
								</p>
							</div>
						</div>
					</div>
					<div className='more-weather-details-box'>
						<h2 className='more-weather-details-header'>
							More Current Weather Details
						</h2>
						<div className='more-weather-details'>
							<p>
								<span> Wind:</span> {currentWeather?.current.wind_mph} {''}
								{'mph'} {'/'} {currentWeather?.current.wind_kph} {'kph'}
							</p>
							<p>
								<span> Humidity: </span> {currentWeather?.current.humidity}{' '}
								{'%'}
							</p>
							<p>
								<span>Gust: </span> {currentWeather?.current.gust_mph} {'mph'}{' '}
								{'/'} {currentWeather?.current.gust_kph} {'kph'}
							</p>
							<p>
								<span>Feels Like:</span> {currentWeather?.current.feelslike_f}
								{'\u00b0'} {'F'} {'/'} {currentWeather?.current.feelslike_c}{' '}
								{'\u00b0'} {'C'}
							</p>
							<p>
								<span>Chance of Rain:</span>{' '}
								{
									currentWeather?.forecast.forecastday[0].day
										.daily_chance_of_rain
								}{' '}
								{'%'}
							</p>
							<p>
								<span>Chance of Snow: </span>{' '}
								{
									currentWeather?.forecast.forecastday[0].day
										.daily_chance_of_snow
								}{' '}
								{'%'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Currentweather;
