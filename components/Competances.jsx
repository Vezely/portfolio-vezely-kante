import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Competances.module.css';
import Image from 'next/image';
import logoPhotoshop from '../public/images/logoPhotoshop.png';
import logoIllustrator from '../public/images/logoIllustrator.png';
import logoHtml from '../public/images/logoHtml.gif';
import logoCss from '../public/images/logoCss.gif';
import logojavascr from '../public/images/logojavascr.gif';
import logoC from '../public/images/logoC.png';
import logoJava from '../public/images/logoJava.png';
import logoSwift from '../public/images/logoSwift.png';
import logoMySql from '../public/images/logoMySql.png';
import logoSqlS from '../public/images/logoSqlS.png';
import logoNode from '../public/images/logoNode.png';
import logoReact from '../public/images/logoReact.gif';
import logoNextjs from '../public/images/logoNextjs.png';
import Details from './Details';
const Competances = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
	});

	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				// opacity: 1,
				y: 0,
				x: 0,
				transition: { duration: 2 },
			});
		} else {
			animation.start({
				// opacity: 0,
				y: -50,
				transition: { duration: 1 },
			});
		}
	}, [animation, inView]);
	return (
		<motion.div ref={ref} initial={{ y: -50, x: -100 }} animate={animation} className={styles.competance}>
			<Details />
			<h2 className={styles.titreComptenceH2}>Niveau de Connaissance</h2>
			<h3 className={styles.titreComptenceH3}>Logiciels de montage</h3>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={300} height={292} src={logoPhotoshop} alt='logo photoshop'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau1}></span>
				</div>
			</div>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={2101} height={2048} src={logoIllustrator} alt='logo illustrator'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau2}></span>
				</div>
			</div>
			<h3 className={styles.titreComptenceH3}>Languages de Programmations</h3>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={900} height={1024} src={logoHtml} alt='logo html'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau3}></span>
				</div>
			</div>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={2400} height={2400} src={logoCss} alt='logo CSS'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau4}></span>
				</div>
			</div>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={310} height={308} src={logojavascr} alt='logo javascript'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau5}></span>
				</div>
			</div>

			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={267} height={300} src={logoC} alt='logo C#'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau6}></span>
				</div>
			</div>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={360} height={360} src={logoJava} alt='logo Java'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau7}></span>
				</div>
			</div>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={2400} height={2400} src={logoSwift} alt='logo swift'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau8}></span>
				</div>
			</div>
			<h3 className={styles.titreComptenceH3}>Bases de données</h3>

			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={600} height={400} src={logoMySql} alt='logo mysql'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau9}></span>
				</div>
			</div>
			<div className={styles.logiciels}>
				<Image className={styles.logoLogiciel} width={260} height={200} src={logoSqlS} alt='logo sql server'></Image>
				<div className={styles.niveau}>
					<span className={styles.niveau10}></span>
				</div>
			</div>
			<div className={styles.categoriesL}>
				<h3 className={styles.titreComptenceH3}>Les librairies et Fremeworks dont je suis plus à l'aise 😍</h3>
				<div className={styles.categories}>
					<Image className={styles.logoF + ' ' + styles.logo1} width={900} height={900} src={logoNode} alt='logo node' />
					<Image className={styles.logoF + ' ' + styles.logo2} width={512} height={512} src={logoReact} alt='logo node' />
					<Image className={styles.logoF + ' ' + styles.logo3} width={1375} height={1375} src={logoNextjs} alt='logo node' />
				</div>
			</div>
		</motion.div>
	);
};

export default Competances;
