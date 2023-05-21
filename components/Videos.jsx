import React from 'react';
import GalerieVideos from './GalerieVideos';
// tableau des videos
const Videos = () => {
	const videos = [
		{
			src: './images/projet/vc1.mov',
			alt: 'video projet',
			titre: 'Calculatrice web',
			description: `Une application de calculatrice web en ligne qui permet aux utilisateurs d'effectuer des calculs mathématiques de base, tels que l'addition, la soustraction, la multiplication et la division. 
            Elle  est facile à utiliser avec une interface utilisateur intuitive, permettant aux utilisateurs de saisir des chiffres et des opérateurs mathématiques pour effectuer des calculs.
            `,
			href: '/Projet',
		},
		{
			src: './images/projet/calc2.mov',
			alt: 'video projet',
			titre: 'Calculatrice web moderne',
			description: `Une application de calculatrice web en ligne qui permet aux utilisateurs d'effectuer des calculs mathématiques de base, tels que l'addition, la soustraction, la multiplication et la division. 
			Elle  est facile à utiliser avec une interface utilisateur intuitive et moderne, permettant aux utilisateurs de saisir des chiffres et des opérateurs mathématiques pour effectuer des calculs.
			`,
			href: './images/projet/calc2.mov',
		},
		{
			src: './images/projet/pendu.mov',
			alt: 'video projet',
			titre: 'Jeu du Bonhomme Pendu',
			description: `Le jeu du pendu est un jeu de devinettes populaire où le joueur doit deviner un mot en proposant des lettres une à une. Le mot est caché derrière des tirets et à chaque lettre proposée, le joueur peut découvrir les lettres correctes du mot. Si le joueur propose une lettre qui ne se trouve pas dans le mot, il perd une vie. Le but du jeu est de deviner le mot avant d'avoir épuisé toutes les vies.`,
			href: './images/projet/pendu.mov',
		},
		{
			src: './images/projet/cours.mov',
			alt: 'video projet',
			titre: `Site web d'inscription aux cours`,
			description: `Un site web d'inscription aux cours en ligne qui permet aux utilisateurs de se créer des comptes, se connecter a un compte,  visualiser les cours disponible sur le site, s’inscrire aux cours qui lui plaisent ou alors se désinscrire aux cours auxquels il est inscrit.`,
			href: './images/projet/cours.mov',
		},
		{
			src: '/images/projet/restoV.mov',
			alt: 'image restaurant veraPasta',
			titre: 'Restaurant VeraPasta',
			description:
				"VerapPaste est un site web responsive et moderne que j'ai développé en utilisant des technologies éprouvées telles que Node.js, Express, et d'autres outils du stack MERN. Le site web de VerapPaste offre une variété de fonctionnalités, notamment :Présentation claire et détaillée du menu du restaurant, avec des images alléchantes et des descriptions appétissantes des plats. Système de réservation en ligne facile à utiliser, permettant aux clients de réserver une table en quelques clics.Possibilité de commander des plats à emporter ou en livraison, grâce à une interface simple et intuitive. Affichage des événements spéciaux et des offres promotionnelles, avec la possibilité de s'inscrire à une newsletter pour rester informé des nouveautés. Intégration des réseaux sociaux, permettant aux clients de partager leur expérience et de suivre les actualités du restaurant.",
			href: '/images/projet/restoV.mov',
		},
	];
	return (
		<div>
			<GalerieVideos videos={videos} />
		</div>
	);
};

export default Videos;
