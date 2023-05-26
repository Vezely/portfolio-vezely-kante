import React from 'react';
import Contact from '../components/Contact';
import styles from '../styles/Main.module.css';
import Head from 'next/head';
const contact = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name='description' content="Page contact sur lequel le monde peut joindre l'auteur" />
				<meta name='theme-color' content='#000000' />

				<meta property='og:title' content='Page contact' />
				<meta property='og:description' content="Page contact sur lequel le monde peut joindre l'auteur" />
				<meta property='og:image' content='http://localhost:3000/images/logoU.png' />
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<Contact />
				</div>
			</main>
		</>
	);
};

export default contact;
