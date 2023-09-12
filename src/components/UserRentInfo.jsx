import React from 'react';
import '../styles/UserRentInfo.scss';

const UserRentInfo = ({pickUpCity, dropOffCity, rentDays, setDropOffCity, setPickUpCity, setRentDays, setDropOffDate, setPickUpDate, setIsSameDropOff, setIsSubmited}) => {
	const refineSearch = () => {
		setDropOffCity('');
		setPickUpCity('');
		setDropOffDate('');
		setPickUpDate('');
		setIsSameDropOff(true);
		setIsSubmited(false);
		setRentDays('');
	}
	return ( 
		<div className="user-rent-info">
						<input className='user-rent-input' type='text' readOnly value={pickUpCity}/>
						<input className='user-rent-input' type='text' readOnly value={dropOffCity ? dropOffCity : pickUpCity}/>
						<input className='user-rent-input' type='text' readOnly value={rentDays + ' days'}/>
						<h2 onClick={refineSearch} className="user-rent-refine">
							REFINE SEARCH
						</h2>
					</div>
	 );
}
 
export default UserRentInfo;