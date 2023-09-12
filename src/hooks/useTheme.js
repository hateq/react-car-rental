import React from 'react';
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';
export const useTheme = () => {
	const [theme, setTheme] = React.useState(localStorage.getItem('app-theme') || defaultTheme);
	React.useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('app-theme', theme)
	}, [theme])
	return {theme, setTheme};
}