import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import CurrentWeather from './Current_Weather/CurrentWeather';
import WeeklyForecast from './Weekly_Forecast/WeeklyForecast';
import './App.css';
import MoreDetails from './More_Details/MoreDetails';

function App() {
	// const searchOptions = {
	// 	key: process.env.REACT_APP_WEATHER_KEY,
	// 	api: 'http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London',
	// };

	//  const apiKey: process.env.REACT_APP_WEATHER_KEY;
	// const apiUrl: `https://api.openweathermap.org/data/2.5/`,

	// const searchOptions = {
	// 	key: process.env.REACT_APP_WEATHER_KEY,
	// 	url: `https://api.openweathermap.org/data/2.5/`,
	// };

	// const [weather, setWeather] = useState([{}]);

	// const onSubmit = (value) => {
	// 	console.log({ value });
	// };

	return (
		<div className='body'>
			<Header />
			{/* <Navigation /> */}
			<CurrentWeather />
			<MoreDetails />
			<WeeklyForecast />
		</div>
	);
}

export default App;
