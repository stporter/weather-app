import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import CurrentWeather from './Current_Weather/CurrentWeather';
import WeeklyForecast from './Weekly_Forecast/WeeklyForecast';
import './App.css';

function App() {
	const searchOptions = {};

	return (
		<div className='body'>
			<Header />
			<Navigation />
			<CurrentWeather />
			<WeeklyForecast />
		</div>
	);
}

export default App;
