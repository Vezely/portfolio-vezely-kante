import React from 'react';
import Accueil from '../components/Accueil';
import Head from 'next/head';
// import connectToDatabase from '../helpers/mongodb';

const Index = () => {
	return (
		<>
			<Head>
				<title>Accueil</title>
				<meta name='description' content="Page d'accueil contenant quelques projets et le contenu des autres pages du site" />
				<meta name='theme-color' content='#000000' />
				<meta property='og:title' content="Page d'accueil" />
				<meta property='og:description' content="Page d'accueil contenant quelques projets et le contenu des autres pages du site" />
				<meta property='og:image' content='http://localhost:3000/images/logoU.png' />
			</Head>
			<Accueil />
		</>
	);
};

// export async function getServerSideProps() {
// 	let projets;
// 	try {
// 		const client = await connectToDatabase();
// 		const db = client.db();
// 		projets = db.collection('projets').find().toArray();
// 	} catch (error) {
// 		projets = [];
// 	}

// 	return {
// 		props: {
// 			projets: JSON.parse(JSON.stringify(projets)),
// 		},
// 	};
// }

export default Index;
