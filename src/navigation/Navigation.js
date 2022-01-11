import React, { useState } from 'react';
import './Navigation.css';

function Navigation(props) {
	return (
		<div>
			<form className='search-weather'>
				<input
					placeholder='Search by city'
					type='text'
					name='searchString'
					className='search-location'
					required
				/>
				<button type='submit' className='search-button'>
					Search
				</button>
			</form>
		</div>
	);
}

export default Navigation;

// 	// const [locationSearch, setLocationSearch] = useState('');
// 	// const onSubmit = (event) => {
// 	// 	event.preventDefault();

// 	// 	submitLocationSearch(locationSearch);
// 	// };
// 	return (
// // 		<div>
// // 			<form onSubmit={onSubmit} className='search-weather'>
// // 				<input
// // 					type='text'
// 				onChange={(event) => setLocationSearch(event.target.value)}
// 				value={locationSearch}
// 				name='location'
// 				className='search-location'
// 				placeholder='Search by city'
// 			/>
// 			<button type='submit' className='search-button' onClick={onSubmit}>
// 				Search
// 			</button>
// 		</form>
// 	</div>
// );
