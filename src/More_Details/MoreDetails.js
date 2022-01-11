import React from 'react';
import './MoreDetails.css';

function MoreDetails(props) {
	return (
		<div className='more-weather-details-box'>
			<div className='more-weather-details'>
				<h2 className='more-details-header'>More Details</h2>
			</div>
			<div className='wind-mph'></div>
		</div>
	);
}

export default MoreDetails;
