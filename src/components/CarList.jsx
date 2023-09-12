import React from 'react';
import CarCard from './CarCard';
import { UserCarsContext } from '../providers/UserCarsProvider';
import { AuthContext } from '../providers/AuthProvider';

const CarList = ({sortCarList, rentDays, setModalSuccessOpen}) => {
	const {userCars, setUserCars} = React.useContext(UserCarsContext);
	const {isAuth, setIsAuth} = React.useContext(AuthContext);
	const onButtonClick = (car) => {
		if(isAuth) {
			setUserCars(userCars || []);
			setModalSuccessOpen(true);
			const newCar = {...car, rentDays: rentDays}
			setUserCars([...userCars, newCar])
			localStorage.setItem('user-cars', JSON.stringify([...userCars, newCar]))
		} else {
			setModalSuccessOpen(true);
		}
	}
	return ( 
		sortCarList().map(car => {
			return (
				<CarCard key={car.model} rentDays={rentDays} onClick={() => onButtonClick(car)} car={car} buttonText={'Book now'}/>
			)
		})
	 );
}
 
export default CarList;