import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import CurrentWeather from './Current_Weather/CurrentWeather';
import WeeklyForecast from './Weekly_Forecast/WeeklyForecast';
import './App.css';
import MoreDetails from './More_Details/MoreDetails';

function App() {
	return (
		<div className='body'>
			<Header />
			<Navigation />
			<CurrentWeather />
			<MoreDetails />
			<WeeklyForecast />
		</div>
	);
}

export default App;
