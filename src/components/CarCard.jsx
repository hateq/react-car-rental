import React from 'react';
import '../styles/CarCard.scss';
import MyButton from './UI/button/MyButton';

const CarCard = ({rentDays, onClick, car, buttonText}) => {
	return ( 
		<div key={car.model} className="car-card">
				<div className="car-card__img-container"><img src={car.image} alt="" /></div>
				<div className="car-card__model">
					<h2>{car.model}</h2>
					<p>{car.vehicleType}</p>
				</div>
				<div className="car-card__info">
			<div className="car-card__price">
				<div>
				<h2>{`${car.price}$`}</h2>
				<p>per day</p>
				</div>
				<div>
					<h2>{`${car.price * rentDays}$`}</h2>
					<p>total</p>
				</div>
			</div>
			<MyButton onClick={onClick}>{buttonText}</MyButton>
				</div>
			</div>
	 );
}
 
export default CarCard;