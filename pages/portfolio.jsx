import React from 'react';
import CategorieProjets from '../components/CategorieProjets';
import styles from '../styles/Main.module.css';
import Head from 'next/head';
const porfolio = () => {
	return (
		<>
			<Head>
				<title>Porfolio</title>
				<meta name='description' content='Page porfolio contenant tous les projets réalisés' />
				<meta name='theme-color' content='#000000' />
				<meta property='og:title' content='Page de porfolio' />
				<meta property='og:description' content='Page porfolio contenant tous les projets réalisés' />
				<meta property='og:image' content='http://localhost:3000/images/logoU.png' />
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<CategorieProjets />
				</div>
			</main>
		</>
	);
};

export default porfolio;
