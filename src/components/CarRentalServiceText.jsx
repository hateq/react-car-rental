import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CarRentalServiceText.scss';

const CarRentalServiceText = () => {
	return ( 
		<div className="car-rental-service">
		<h2 className="car-rental-service__title">
			Worlds biggest online car rental service.
		</h2>
		<p className="car-rental-service__text">
			You dont even need to get up from the couch, we work online. You dont even need to own car, pay taxes for it, fix it, we do it for you and millions of our clients!
		</p>
		<div className="car-rental-service__buttons">
			<button form='select-form' className='car-rental-service__button' style={{
							color: 'white'
			}}>Book your car</button>
			<Link to={'/about'}>Find out more</Link>
		</div>
	</div>
	 );
}
 
export default CarRentalServiceText;