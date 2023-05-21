import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/ContenuHeader.module.css';
const ContenuHeader = () => {
	const [isScrolling, setIsScrolling] = useState(false);
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
		<div className={`${styles.contenu}`}>
			<div className={styles.presentation}>
				<div className={styles.entete}>
					<h1 className={styles.headerTitle + ' ' + 'animate__animated animate__backInDown'}>
						<span className={styles.bon}>Bon</span> jour!
					</h1>
					<span className={styles.nom}>moi c&apos;est </span>
				</div>
				<div className={styles.nomStyle_container}>
					<span>Vezely</span>
					<span className={styles.nomStyle}>Kanté, </span>
				</div>
				<div className={styles.fonction}>je suis Programmeur...</div>
			</div>
			<Link href='/portfolio' className={styles.porfolio + ' ' + 'animate__animated animate__fadeInUpBig'}>
				<svg viewBox='0 0 24 24'>
					<path d='m2.009 11.998c0-5.518 4.48-9.998 9.998-9.998s9.998 4.48 9.998 9.998c0 5.517-4.48 9.997-9.998 9.997s-9.998-4.48-9.998-9.997zm1.5 0c0 4.69 3.808 8.497 8.498 8.497s8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498-8.498 3.808-8.498 8.498zm4.716 1.528s1.505 1.501 3.259 3.254c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.217-.526 0-.192-.074-.384-.221-.53-.292-.293-.766-.295-1.057-.004l-1.977 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.979-1.978c-.289-.289-.761-.287-1.054.006-.147.147-.221.339-.222.53 0 .191.071.38.216.525z' />
				</svg>
				<div>
					<div className={styles.scanner}>
						<span>Découvrer mes projets.</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ContenuHeader;
