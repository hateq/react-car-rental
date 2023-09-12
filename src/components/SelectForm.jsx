import React from 'react';
import AsyncSelect from 'react-select/async';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import '../styles/SelectForm.scss';

const SelectForm = ({setPickUpCity, setDropOffCity, isSameDropOff, pickUpDate, setPickUpDate, setDropOffDate, data, dropOffDate, setIsSubmited, setRentDays}) => {
	const date = new Date();
	const changePickUpCity = (selectedOption) => {
		setPickUpCity(selectedOption.value);
	}
	const changeDropOffCity = (selectedOption) => {
		setDropOffCity(selectedOption.value);
	}
	const loadOptions = (searchValue, callback) => {
		const filteredOptions = data.data.data.data.filter(city => {return city.city.toLowerCase().includes(searchValue.toLowerCase()) && city.populationCounts[0].value > 1000000
		}).map(city => {
			return {value: city.city + ',' + city.country, label: city.city + ', ' + city.country}
		});
		callback(filteredOptions)
}
const onSelectFormSubmit = e => {
	e.preventDefault();
	const pickUpDays = pickUpDate.split('-');
	const dropOffDays = dropOffDate.split('-');
	const currentDays = ((dropOffDays[0] - pickUpDays[0]) * 365) + ((dropOffDays[1] - pickUpDays[1]) * 30) + (dropOffDays[2] - pickUpDays[2])
	setRentDays(currentDays < 0 ? 0 : currentDays);
	setIsSubmited(true);
}	
	return ( 
		<form id='select-form' onSubmit={onSelectFormSubmit} className="select-form">
		<div className="select-container">
			<AsyncSelect placeholder={'Pick up'} required classNamePrefix='custom-select' loadOptions={loadOptions} onChange={changePickUpCity}/>
		</div>
		<div style={{
			display: `${isSameDropOff ? 'none' : 'block'}`,
		}} className="select-container">
			<AsyncSelect required={isSameDropOff ? false : true} placeholder={'Drop off'} classNamePrefix='custom-select' loadOptions={loadOptions} onChange={changeDropOffCity}/>
		</div>
		<div className="date-container">
			<MyInput required type={'date'} min={`${date.getFullYear()}-${date.getUTCMonth() + 1 < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`} onChange={e => {
				setPickUpDate(e.target.value)
			}}/>
			<MyInput required type={'date'} min={pickUpDate} onChange={e => {
				setDropOffDate(e.target.value)
			}}/>
		</div>
		<MyButton>Find</MyButton>
	</form>
	 );
}
 
export default SelectForm;