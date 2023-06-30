import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import 'animate.css';
import { useRouter } from 'next/router';
import styles from '../styles/Menu.module.css';
import Image from 'next/image';
import logoV2 from '../public/images/logoVG1.webp';
const Menu = () => {
	const [isScrolling, setIsScrolling] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(true);
	const router = useRouter();
	const getActiveClass = (path) => {
		return router.pathname === path ? styles.active : '';
	};
	const uncheckCheckbox = () => {
		const checkbox = document.getElementById('checkbox');
		if (checkbox) {
			checkbox.checked = false;
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolling(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`${styles.nav} ${isScrolling ? styles.toggleNav : ''} animate__animated animate__bounceInDown`}>
			<input type='checkbox' id='checkbox' className={styles.checkbox} />
			<label htmlFor='checkbox' className={styles.toggle}>
				<div className={styles.bars + ' ' + styles.bar1} id='bar1'></div>
				<div className={styles.bars + ' ' + styles.bar2} id='bar2'></div>
				<div className={styles.bars + ' ' + styles.bar3} id='bar3'></div>
			</label>
			<div>
				<Link href='/'>
					<Image priority className={`${styles.logo} ${isScrolling ? styles.logoMoin : ''}`} width={155} height={57} src={logoV2} alt='logo' />
				</Link>
			</div>
			<ul className={`${styles.ulMenu}  ${isMenuVisible ? '' : styles.hideMenu} `}>
				<li className={styles.liLien + ' ' + 'animate__animated animate__backInDown'} onClick={uncheckCheckbox}>
					<Link className={`${styles.link} ${getActiveClass('/')} ${styles.acti}`} onClick={() => setIsMenuVisible(false)} href='/'>
						Accueil
					</Link>
				</li>
				<li className={styles.liLien + ' ' + 'animate__animated animate__backInDown'} onClick={uncheckCheckbox}>
					<Link
						className={`${styles.link} ${getActiveClass('/portfolio')} ${styles.acti}`}
						onClick={() => setIsMenuVisible(false)}
						href='/portfolio'>
						Portfolio
					</Link>
				</li>
				<li className={styles.liLien + ' ' + 'animate__animated animate__backInDown'} onClick={uncheckCheckbox}>
					<Link
						className={`${styles.link} ${getActiveClass('/apropos')} ${styles.acti}`}
						onClick={() => setIsMenuVisible(false)}
						href='/apropos'>
						A propos
					</Link>
				</li>
				<li className={styles.liLien + ' ' + 'animate__animated animate__backInDown'} onClick={uncheckCheckbox}>
					<Link
						className={`${styles.link} ${getActiveClass('/contact')} ${styles.acti}`}
						onClick={() => setIsMenuVisible(false)}
						href='/contact'>
						Contact
					</Link>
				</li>
				<li className={styles.liLien + ' ' + 'animate__animated animate__backInDown'} onClick={uncheckCheckbox}>
					<a target='_blank' className={styles.link} href='/cv-vg-v2.pdf'>
						Mon CV
					</a>
				</li>
				<li className={styles.liLien + ' ' + 'animate__animated animate__backInDown'} onClick={uncheckCheckbox}>
					<a className={styles.link} href='#'>
						ENG
					</a>
				</li>
				<li className={styles.liLien + ' ' + styles.numero + ' ' + 'animate__animated animate__backInDown'}>
					<a target='blank' className={styles.link + ' ' + styles.numeroHover} href='tel:8196392775'>
						<svg width='20' height='24'>
							<path d='M18 24h-12c-1.104 0-2-.896-2-2v-20c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v20c0 1.104-.896 2-2 2zm1-5.083h-14v3.083c0 .552.449 1 1 1h12c.552 0 1-.448 1-1v-3.083zm-7 3c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm7-17h-14v13h14v-13zm-1-3.917h-12c-.551 0-1 .449-1 1v1.917h14v-1.917c0-.551-.448-1-1-1zm-4.5 1.917h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s-.224.5-.5.5z' />
						</svg>
						<span>819 639 2775</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
