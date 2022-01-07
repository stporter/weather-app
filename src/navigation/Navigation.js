import React, { useState } from 'react';
import './Navigation.css';

function Navigation(props) {
	return (
		<div>
			<form className='search-weather'>
				<input
					type='text'
					name='location'
					className='search-location'
					placeholder='Search by city/zipcode'
				/>
				<button className='search-button'>Search</button>
			</form>
		</div>
	);
}

export default Navigation;
