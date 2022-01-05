import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import CurrentWeather from './Current_Weather/CurrentWeather';
import WeeklyForecast from './Weekly_Forecast/WeeklyForecast';
import './App.css';

function App() {
	return (
		<div>
			<h1>Weather App</h1>
			<Header />
			<Navigation />
			<CurrentWeather />
			<WeeklyForecast />
		</div>
	);
}

export default App;
