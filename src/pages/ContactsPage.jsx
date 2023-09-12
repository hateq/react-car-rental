import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Contacts.scss';
import { useQuery } from 'react-query';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import MyLoader from '../components/UI/loader/MyLoader'

const ContactPage = () => {
	async function fetchCountries() {
		return await axios.get('https://restcountries.com/v3.1/all');
}
const data = useQuery('countries', fetchCountries);
	const [isCountrySelected, setIsCountrySelected] = React.useState(false);
	const [userCountryData, setUserCountryData] = React.useState({});
	const [countryInput, setCountryInput] = React.useState('');
	React.useEffect(() => {
		try {
			if (localStorage.getItem('user-country')) {
				setUserCountryData(data.data.data.find(name => name.name.common == localStorage.getItem('user-country')))
				setIsCountrySelected(true)
			} 
		} catch {

		}
	},[data])
	const onCountryClick = (name) => {
		setUserCountryData(name);
		setIsCountrySelected(true);
		localStorage.setItem('user-country', name.name.common)
	}
	const buttonOnClick = () => {
		setIsCountrySelected(false);
		setUserCountryData(null);
		setCountryInput('');
		localStorage.removeItem('user-country')
	}
	if (data.isError) {
		return <h3>Error</h3>
	}

	return ( 
		<>
		<Header activePage={'contacts'}/>
		<div className="contacts">
			<h2 className="contacts-title">OUR CONTACTS</h2>
			<div className="country-select">
				{isCountrySelected ? <>
				<h3 className={`${isCountrySelected ? 'user-country' : 'hidden'}`}>
				Your country is {userCountryData.name.common}
			</h3>
							<MyButton onClick={buttonOnClick} >Rechange</MyButton>
							<h2 className="phone-number-title">
								Our phone number
							</h2>
							<h2 className="phone-number-text">
								{`${userCountryData.idd.root}${userCountryData.idd.suffixes.length > 1 ? '' : userCountryData.idd.suffixes[0]} 918-666-6666`}
							</h2>
							<h2 className="mail-title">Email</h2>
							<h2 className="mail-text">
								konyukhov.vad@gmail.com
							</h2>
							<h2 className="social-media-title">
								OUR SOCIAL MEDIA
							</h2>
							<div className="social-media-container">
								<a target='_blank' href="https://github.com/hateq">
									<h2 className="social-media-items">
										GITHUB
									</h2>
									</a>
									<a target='_blank' href="https://www.linkedin.com/in/vadim-konyukhov-a958b9283/">
										<h2 className="social-media-items">
										LINKEDIN
											</h2>
											</a>
											<a target='_blank' href="https://t.me/fhdhddjb">
												<h2 className="social-media-items">
												TELEGRAM
													</h2>
													</a>
							</div>
							</>	
				 : <>
				 <h3>
				 Choose your country
			 </h3>
			 <MyInput value={countryInput} placeholder={'Find your country...'} onChange={e => setCountryInput(e.target.value)}/>
			 <ul>
			 {data.isLoading ? 
			 <MyLoader/> :
			 data.data.data.filter(country => {
				return country.name.common.toLowerCase().includes(countryInput.toLowerCase())
			 }).map(country => {
			 return <li className={country.name.common == 'Russia' ? 'user-russia' : ''} key={country.name.common} onClick={() => {
				 onCountryClick(country)
			 }}> {<img src={country.flags.png} alt="" />}{country.name.common}</li>;
			 })}
		 </ul>
		 </>
				 }
				<img className='moving-img' style={{
					transform: isCountrySelected && userCountryData.name.common == 'Russia' ? 'translateX(1500px)' : 'translateX(-1500px)'
				}} src={'./images/users/stalin.jpg'} alt="" />
				<img style={{
					transform: isCountrySelected && userCountryData.name.common !== 'Russia' ? 'translateX(1500px)' : 'translateX(-1500px)'
				}} className='moving-img' src="./images/car-contacts.png" alt="" />
			</div>
		</div>
		</>
	 );
}
 
export default ContactPage;