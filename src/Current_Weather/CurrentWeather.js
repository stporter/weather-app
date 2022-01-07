import React from 'react';
import './CurrentWeather.css';

function Currentweather(props) {
	return (
		<div className='current-weather'>
			Current Weather
			<button className='show-more-info'>More Details</button>
		</div>
	);
}

export default Currentweather;
