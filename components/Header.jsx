import React from 'react';
import Menu from '../components/Menu';
import ContenuHeader from '../components/ContenuHeader';
import styles from '../styles/Header.module.css';
import { useTheme } from './ThemeProvider';
import Image from 'next/image';
import devHead from '../public/images/devHead2.gif';

const Header = () => {
	const [theme, setTheme] = useTheme();
	const handleThemeChange = (event) => {
		setTheme(event.target.checked ? 'Sombre' : 'Lumière');
	};

	return (
		<header className={styles.header} id='haut'>
			<div className={styles.checkbox_seach_container}>
				<span>{theme} : </span>
				<div className={styles.checkbox_apple}>
					<input className={styles.yep} id='check-apple' type='checkbox' checked={theme === 'Sombre'} onChange={handleThemeChange} />
					<label htmlFor='check-apple'>Theme:</label>
				</div>
				<div className={styles.divSearch}>
					<svg className={styles.svgSearch} viewBox='0 0 24 24'>
						<path d='m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z' />
					</svg>
					<input type='search' className={styles.inputSearch} placeholder='Recherche' />
				</div>
			</div>
			<Menu></Menu>

			<ContenuHeader />
			<Image className={styles.dev} src={devHead} alt='image dev' />
		</header>
	);
};

export default Header;
