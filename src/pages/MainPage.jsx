import React from 'react';
import Header from '../components/Header';
import '../styles/MainPage.scss';
import { useQuery } from 'react-query';
import axios from 'axios';
import MyButton from '../components/UI/button/MyButton';
import Modal from '../components/Modal';
import MyLoader from '../components/UI/loader/MyLoader'
import CarSearch from '../components/CarSearch'
import CarList from '../components/CarList'
import CarsFilters from '../components/CarsFilters'
import UserRentInfo from '../components/UserRentInfo'
import SelectForm from '../components/SelectForm'
import CarRentalServiceText from '../components/CarRentalServiceText';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const MainPage = () => {
	const {isAuth, setIsAuth} = React.useContext(AuthContext);
	const [pickUpCity, setPickUpCity] = React.useState('');
	const [dropOffCity, setDropOffCity] = React.useState('');
	const [pickUpDate, setPickUpDate] = React.useState();
	const [dropOffDate, setDropOffDate] = React.useState();
	const [rentDays, setRentDays] = React.useState();
	const [isSameDropOff, setIsSameDropOff] = React.useState(true);
	const [isSubmited, setIsSubmited] = React.useState(false);
	const [count, setCount] = React.useState(0);
	const [searchCarsInput, setSearchCarsInput] = React.useState('');
	const [modalSuccessOpen, setModalSuccessOpen] = React.useState(false);
	const [vehicleType, setVehicleType] = React.useState('');
	const [carColor, setCarColor] = React.useState('');
	const [carCompany, setCarCompany] = React.useState('');
	const [carsSort, setCarsSort] = React.useState('');
	const fetchCities = async () => {
		return await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities')
	}
	const fetchCars = async () => {
		return await axios.get('https://64fb45a1cb9c00518f7adbd3.mockapi.io/cars')
	}
	const data = useQuery('cities', fetchCities);
	const carList = useQuery('cars', fetchCars);
const filterCarList = () => {
	return carList.data.data.filter(car => {
		if (vehicleType !== '') {
			return car.vehicleType == vehicleType;
		} else {
			return car
		}
	}).filter(car => {
		if (carCompany !== '') {
			return car.company == carCompany;
		} else {
			return car
		}
	}).filter(car => {
		if (carColor !== '') {
			return car.color == carColor;
		} else {
			return car
		}
	}).filter(car => {
		return car.model.toLowerCase().includes(searchCarsInput.toLowerCase())
	})
}
const sortCarList = () => {
	if(carsSort == 'price-to-up') {
		return filterCarList().sort((a,b) => a.price - b.price)
	} 
	if(carsSort == 'price-to-low') {
		return filterCarList().sort((a,b) => -a.price - -b.price)
	} 
	else {
		return filterCarList();
	}
}
	return ( 
		<>
		<Header/>
		<div className="main-page">
			<div className="city-select">
				{
					isSubmited ? <>
					<UserRentInfo pickUpCity={pickUpCity} dropOffCity={dropOffCity} rentDays={rentDays} setDropOffCity={setDropOffCity} setPickUpCity={setPickUpCity} setRentDays={setRentDays} setDropOffDate={setDropOffDate} setPickUpDate={setPickUpDate} setIsSameDropOff={setIsSameDropOff} setIsSubmited={setIsSubmited}/>
					<div className="cars-choose">
						<CarsFilters count={count} setCount={setCount} vehicleType={vehicleType} setVehicleType={setVehicleType} carColor={carColor} setCarColor={setCarColor} carCompany={carCompany} setCarCompany={setCarCompany}/>
						<div className="cars">
							<h2 className="cars-title">
								We found {filterCarList().length} cars in {pickUpCity}
							</h2>
						<CarSearch searchValue={searchCarsInput} setSearchCarsInput={setSearchCarsInput} setCarsSort={setCarsSort}/>
							<div className="cars-items">
								{carList.isLoading ?
								<MyLoader/> :
								filterCarList().length == 0 ? 
								<h2 className='no-cars'>No Cars</h2> : 
									<CarList sortCarList={sortCarList} rentDays={rentDays} setModalSuccessOpen={setModalSuccessOpen}/>
								}
							</div>
						</div>
					</div>
					</> :
					<>
					<h2 className="main-page-title">
				Find your ideal car from 10+ cars
			</h2>
				<div className="drop-off">
				<p onClick={() => {
					setIsSameDropOff(true);
				}} className={isSameDropOff ? 'active' : ''}>Same drop-off</p>
				<p onClick={() => {
					setIsSameDropOff(false);
				}} className={isSameDropOff ? '' : 'active'}>Different drop-off</p>
				</div>
				<SelectForm dropOffDate={dropOffDate} setIsSubmited={setIsSubmited} setRentDays={setRentDays} isSameDropOff={isSameDropOff} pickUpDate={pickUpDate} setPickUpDate={setPickUpDate} setDropOffDate={setDropOffDate} setPickUpCity={setPickUpCity} setDropOffCity={setDropOffCity} data={data}/>
				<CarRentalServiceText/>
					</>
				}
							<Modal open={modalSuccessOpen} setOpen={setModalSuccessOpen}>
								{isAuth ? 
								<>
								<h2 className="modal-text">You succesfully booked a car!✅</h2>
									<Link to='/profile'>
										<MyButton>To My Profile</MyButton>
									</Link>
								</> :
								<h2 style={{
									margin: '18% 0',
								}}>You have not log in your account</h2>
							}
							</Modal>
			</div>
		</div>
		</>
	 );
}
 
export default MainPage;