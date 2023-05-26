import React from 'react';
import Accueil from '../components/Accueil';
import Head from 'next/head';
// import connectToDatabase from '../db';

const Index = ({ projets }) => {
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
			<Accueil projets={projets} />
		</>
	);
};

// export async function getServerSideProps() {
// 	const db = await connectToDatabase();
// 	const collection = db.collection('projets');
// 	const projets = await collection.find({}).toArray();

// 	return {
// 		props: {
// 			projets: JSON.parse(JSON.stringify(projets)),
// 		},
// 	};
// }

export default Index;
