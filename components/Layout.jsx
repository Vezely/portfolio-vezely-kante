import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import { useTheme } from './ThemeProvider';

const Layout = (props) => {
	const [theme, setTheme] = useTheme();
	return (
		<div className={styles.layout} data-theme={theme}>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
