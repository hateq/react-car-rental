import React from 'react';
import AsyncSelect from 'react-select/async';
import '../styles/CustomSelects.scss';
import { useQuery } from 'react-query';
import axios from 'axios';

const CustomCountrySelect = ({setUserCountry}) => {
	async function fetchCountries() {
		return await axios.get('https://restcountries.com/v3.1/all')
	}
	const data = useQuery('countries', fetchCountries)
	const changeUserCountry = (selectedOption) => {
		setUserCountry(selectedOption.value);
	}
	const loadOptions = (searchValue, callback) => {
		const countries = data.data.data
			.filter(country => {
				return country.name.common
					.toLowerCase()
					.includes(searchValue.toLowerCase())
			})
			.map(country => {
				return { value: country.name.common, label: country.name.common }
			})
		callback(countries)
	}
	return ( 
		<div className="select-container">
			<AsyncSelect
			required
			placeholder={'Your country'}
			classNamePrefix='custom-select'
			loadOptions={loadOptions}
			onChange={changeUserCountry}
							/>
			</div>
	 );
}
 
export default CustomCountrySelect;