import React from 'react';
import Appropos from '../components/Appropos';
import Competances from '../components/Competances';
import styles from '../styles/Main.module.css';
import Head from 'next/head';
import HeadProjets from '../components/HeadProjets';
import Commentaire from '../components/Commentaire';
import Services from '../components/Services';
const apropos = () => {
	return (
		<>
			<Head>
				<title>A propos</title>
				<meta name='description' content='Page a propos contenant des informations sur le proprietaire du site' />
				<meta name='theme-color' content='#000000' />
				<meta property='og:title' content='Page a propos' />
				<meta property='og:description' content='Page a propos contenant des informations sur le proprietaire du site' />
				<meta property='og:image' content='http://localhost:3000/images/logoU.png' />
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<HeadProjets />
					<Appropos />
					<Services />
					<Commentaire />
					<Competances />
				</div>
			</main>
		</>
	);
};

export default apropos;
