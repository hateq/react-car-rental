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
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/profile' element={<UserProfilePage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	)
}

export default Pages
