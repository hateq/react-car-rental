import React from 'react';
import '../styles/CarFilters.scss';

const CarsFilters = ({count, setCount, vehicleType, setVehicleType, carColor, setCarColor, carCompany, setCarCompany}) => {
	return ( 
		<div className="cars-filters">
		<div className="cars-filters__title-container">
			<h2 className="cars-filters__title">
				Filters
			</h2>
			<h2 className="cars-filters__counter">
				{count}
			</h2>
		</div>
		<h2 className="cars-filters__attribute">
			Vehicle type
		</h2>
		<p onClick={() => {
			if (vehicleType!== '' && vehicleType !== 'sedan') {
				setCount(prev => prev - 1);
			}
			if (vehicleType == 'sedan') {
				setVehicleType('');
				setCount(prev => prev - 1);
			} else {
				setVehicleType('sedan');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${vehicleType == 'sedan' ? 'active' : ''}`}>
			Sedan
		</p>
		<p onClick={() => {
			if (vehicleType!== '' && vehicleType !== 'jeep') {
				setCount(prev => prev - 1);
			}
			if (vehicleType == 'jeep') {
				setVehicleType('');
				setCount(prev => prev - 1);
			} else {
				setVehicleType('jeep');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${vehicleType == 'jeep' ? 'active' : ''}`}>
			Jeep
		</p>
		<p  onClick={() => {
			if (vehicleType!== '' && vehicleType !== 'sport') {
				setCount(prev => prev - 1);
			}
			if (vehicleType == 'sport') {
				setVehicleType('');
				setCount(prev => prev - 1);
			} else {
				setVehicleType('sport');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${vehicleType == 'sport' ? 'active' : ''}`}>
			Sport
		</p>
		<h2 className="cars-filters__attribute">
			Color
		</h2>
		<p onClick={() => {
			if (carColor !== '' && carColor !== 'Black') {
				setCount(prev => prev - 1);
			}
			if (carColor == 'Black') {
				setCarColor('');
				setCount(prev => prev - 1);
			} else {
				setCarColor('Black');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carColor == 'Black' ? 'active' : ''}`}>
			Black
		</p>
		<p onClick={() => {
			if (carColor !== '' && carColor !== 'White') {
				setCount(prev => prev - 1);
			}
			if (carColor == 'White') {
				setCarColor('');
				setCount(prev => prev - 1);
			} else {
				setCarColor('White');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carColor == 'White' ? 'active' : ''}`}>
			White
		</p>
		<p onClick={() => {
			if (carColor !== '' && carColor !== 'Gray') {
				setCount(prev => prev - 1);
			}
			if (carColor == 'Gray') {
				setCarColor('');
				setCount(prev => prev - 1);
			} else {
				setCarColor('Gray');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carColor == 'Gray' ? 'active' : ''}`}>
			Gray
		</p>					
		<p onClick={() => {
			if (carColor !== '' && carColor !== 'Other') {
				setCount(prev => prev - 1);
			}
			if (carColor == 'Other') {
				setCarColor('');
				setCount(prev => prev - 1);
			} else {
				setCarColor('Other');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carColor == 'Other' ? 'active' : ''}`}>
			Other
		</p>
		<h2 className="cars-filters__attribute">
			Company
		</h2>
		<p onClick={() => {
			if (carCompany !== '' && carCompany !== 'Mercedes') {
				setCount(prev => prev - 1);
			}
			if (carCompany == 'Mercedes') {
				setCarCompany('');
				setCount(prev => prev - 1);
			} else {
				setCarCompany('Mercedes');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carCompany == 'Mercedes' ? 'active' : ''}`}>
			Mercedes
		</p>
		<p onClick={() => {
			if (carCompany !== '' && carCompany !== 'BMW') {
				setCount(prev => prev - 1);
			}
			if (carCompany == 'BMW') {
				setCarCompany('');
				setCount(prev => prev - 1);
			} else {
				setCarCompany('BMW');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carCompany == 'BMW' ? 'active' : ''}`}>
			BMW
		</p>
		<p onClick={() => {
			if (carCompany !== '' && carCompany !== 'Toyota') {
				setCount(prev => prev - 1);
			}
			if (carCompany == 'Toyota') {
				setCarCompany('');
				setCount(prev => prev - 1);
			} 
			else {
				setCarCompany('Toyota');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carCompany == 'Toyota' ? 'active' : ''}`}>
			Toyota
		</p>
		<p onClick={() => {
			if (carCompany !== '' && carCompany !== 'Other') {
				setCount(prev => prev - 1);
			}
			if (carCompany == 'Other') {
				setCarCompany('');
				setCount(prev => prev - 1);
			} else {
				setCarCompany('Other');
				setCount(prev => prev + 1);
			}	
		}} className={`cars-filters__text ${carCompany == 'Other' ? 'active' : ''}`}>
			Other
		</p>
			</div>
	 );
}
 
export default CarsFilters;