import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactsPage from '../pages/ContactsPage'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import RegisterPage from '../pages/RegisterPage'
import UserProfilePage from '../pages/UserProfilePage'

const Pages = () => {
	return (
		<>
			<Routes>
				<Route path='/react-car-rental/' element={<MainPage />} />
				<Route path='/react-car-rental/about' element={<AboutPage />} />
				<Route path='/react-car-rental/contacts' element={<ContactsPage />} />
				<Route path='/react-car-rental/register' element={<RegisterPage />} />
				<Route path='/react-car-rental/profile' element={<UserProfilePage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	)
}

export default Pages
