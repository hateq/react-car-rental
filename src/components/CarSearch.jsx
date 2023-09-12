import React from 'react';
import MyInput from './UI/input/MyInput';
import '../styles/CarSearch.scss';
const CarSearch = ({searchCarsInput, setSearchCarsInput, setCarsSort}) => {
	return ( 
		<div className="cars-settings">
		<MyInput type='text' placeholder='Search' value={searchCarsInput} onChange={e => {
			setSearchCarsInput(e.target.value);
		}}/>
		<select onChange={e => {
				setCarsSort(e.target.value);
			}}>
			<option value={''}>By default</option>
			<option value="price-to-up">By price to up</option>
			<option value="price-to-low">By price to low</option>
		</select>
	</div>
	 );
}
 
export default CarSearch;