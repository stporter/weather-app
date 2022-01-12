import React, { useState } from 'react';
import Header from './Header/Header';

import CurrentWeather from './Current_Weather/CurrentWeather';
import Modal from './Modal/modal';
import Footer from './Footer/Footer';

import './App.css';

function App() {
	const [show, setShow] = useState(false);

	return (
		<div className='body'>
			<Header />
			<button className='modal-button-app' onClick={() => setShow(true)}>
				About
			</button>
			<Modal onClose={() => setShow(false)} show={show} />
			<CurrentWeather />
			<Footer />
		</div>
	);
}

export default App;
