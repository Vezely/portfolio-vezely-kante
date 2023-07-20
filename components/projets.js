// les images de tous mes projets
const images = [
	{
		type: 'web',
		src: '/images/projet/pwm.png',
		alt: 'image projet',
		titre: 'Une application de calculatrice web en ligne',
		description:
			"Une application de calculatrice web en ligne qui permet aux utilisateurs d'effectuer des calculs mathématiques de base, tels que l'addition, la soustraction, la multiplication et la division. Elle est facile à utiliser avec une interface utilisateur intuitive, permettant aux utilisateurs de saisir des chiffres et des opérateurs mathématiques pour effectuer des calculs.",
		lien: 'https://github.com/Vezely/Calculatrice-Moderne1.git',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		nbLike: 674,
		width: 2256,
		height: 1374,
		lien_site: 'https://calculatrice-vg.vercel.app/',
		annee: '2022',
	},
	{
		type: 'web',
		src: '/images/projet/pp1.png',
		alt: 'image projet',
		titre: 'Bonhomme pendu',
		description:
			"Le jeu du pendu est un jeu de devinettes populaire où le joueur doit deviner un mot en proposant des lettres une à une. Le mot est caché derrière des tirets et à chaque lettre proposée, le joueur peut découvrir les lettres correctes du mot. Si le joueur propose une lettre qui ne se trouve pas dans le mot, il perd une vie. Le but du jeu est de deviner le mot avant d'avoir épuisé toutes les vies.",
		lien: 'https://github.com/Vezely/Jeu_du_pendu.git',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		nbLike: 1532,
		width: 2560,
		height: 1380,
		lien_site: 'https://jeu-du-pendu-kantev.vercel.app/',
		annee: '2022',
	},
	{
		type: 'web',
		src: '/images/projet/pc1.png',
		alt: 'image calculatrice',
		titre: 'Calculatrice web',
		description:
			"Une application de calculatrice web en ligne qui permet aux utilisateurs d'effectuer des calculs mathématiques de base, tels que l'addition, la soustraction, la multiplication et la division. Elle est facile à utiliser avec une interface utilisateur intuitive, permettant aux utilisateurs de saisir des chiffres et des opérateurs mathématiques pour effectuer des calculs.",
		lien: 'https://github.com/Vezely/Calculatrice2.git',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		nbLike: 436,
		width: 2560,
		height: 1380,
		lien_site: 'https://calculatrice-classique-vg.vercel.app/',
		annee: '2022',
	},
	{
		type: 'bureau',
		src: '/images/projet/abe.png',
		alt: 'image projet',
		titre: "Gestion D'inscription",
		description:
			"Une application bureau qui permet d'inscrire les étudiants dans une base de donnée. Voila une bonne solution pour les établissements d'enseignement qui souhaitent centraliser les informations sur les étudiants en un seul endroit. Elle peut permettre d'entrer les informations personnelles des étudiants, telles que leur nom, adresse, numéro de téléphone, e-mail, et autres informations pertinentes.",
		lien: 'https://github.com/Vezely/GestionInscription.git',
		technologies: ['C#', 'Xaml', 'SQL Server', 'WPF'],
		nbLike: 321,
		width: 1366,
		height: 768,
		lien_site: null,
		annee: '2022',
	},
	{
		type: 'web',
		src: '/images/projet/pw6.png',
		alt: 'image projet',
		titre: "Site web d'inscription aux cours",
		description:
			"Un site web d'inscription aux cours en ligne qui permet aux utilisateurs de se créer des comptes, se connecter a un compte, visualiser les cours disponible sur le site, s’inscrire aux cours qui lui plaisent ou alors se désinscrire aux cours auxquels il est inscrit.",
		lien: 'https://github.com/Vezely/Projet-parti2.git',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Nodejs', 'SQL Lite'],
		nbLike: 767,
		width: 2560,
		height: 1380,
		lien_site: null,
		annee: '2023',
	},
	{
		type: 'bureau',
		src: '/images/projet/abc.png',
		alt: 'calculatrice bureau',
		titre: 'Calculatrice bureau',
		description:
			"Une application de calculatrice bureau qui permet aux utilisateurs d'effectuer des calculs mathématiques de base, tels que l'addition, la soustraction, la multiplication, la division et aussi des calculs mathématiques avancés comme le modulo, le factoriel ou alors l’inverse d’un nombre. Elle est facile à utiliser avec une interface utilisateur intuitive, permettant aux utilisateurs de saisir des chiffres et des opérateurs mathématiques pour effectuer des calculs.",
		lien: 'https://github.com/Vezely/CalculatriceBureau.git',
		technologies: ['C#', 'Xaml'],
		nbLike: 199,
		width: 1366,
		height: 768,
		lien_site: null,
		annee: '2022',
	},
	{
		type: 'web',
		src: '/images/projet/restoV.png',
		alt: 'image restaurant veraPasta',
		titre: 'Restaurant VeraPasta',
		description:
			"VerapPaste est un site web responsive et moderne que j'ai développé en utilisant des technologies éprouvées telles que Node.js, Express, et d'autres outils du stack MERN. Le site web de VerapPaste offre une variété de fonctionnalités, notamment :Présentation claire et détaillée du menu du restaurant, avec des images alléchantes et des descriptions appétissantes des plats. Système de réservation en ligne facile à utiliser, permettant aux clients de réserver une table en quelques clics.Possibilité de commander des plats à emporter ou en livraison, grâce à une interface simple et intuitive. Affichage des événements spéciaux et des offres promotionnelles, avec la possibilité de s'inscrire à une newsletter pour rester informé des nouveautés. Intégration des réseaux sociaux, permettant aux clients de partager leur expérience et de suivre les actualités du restaurant.",
		lien: 'https://github.com/Vezely/restaurant',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Nodejs', 'Express', 'Handlebars', 'SQL Lite'],
		nbLike: 1699,
		width: 2560,
		height: 1380,
		lien_site: null,
		annee: '2023',
	},
	{
		type: 'bureau',
		src: '/images/projet/vEmploye.jpg',
		alt: 'image',
		titre: 'Application de gestion des disponibilités des employés',
		description:
			'Une application bureau permettant la planification automatique de l’horaire de plusieurs personnes afin de pouvoir mieux gérer la prise de rendez-vous. Ainsi, l’application permet de stocker les disponibilités de plusieurs utilisateurs. Ces disponibilités sont enregistrées de façon à être persistantes (elles ne se perdent pas à la fermeture de l’application). Le programme permet la sélection de plusieurs des utilisateurs ainsi qu’une durée pour la rencontre et de proposer des périodes possibles pour la rencontre en tenant compte des disponibilités de tous les utilisateurs sélectionnés.',
		lien: 'https://github.com/NathanMusoko/-appointment',
		technologies: ['C#', 'Xaml', 'SQL Server', 'WPF'],
		nbLike: 1399,
		width: 854,
		height: 480,
		lien_site: null,
		annee: '2023',
	},
	{
		type: 'web',
		src: '/images/projet/newEgg.png',
		alt: 'image',
		titre: 'Newegg clône',
		description:
			"Le projet 'Clonage du site Newegg' est une reproduction fidèle du célèbre site de commerce électronique Newegg. En utilisant une combinaison de compétences en développement web, de programmation et de design, j'ai recréé l'interface utilisateur et les fonctionnalités principales de Newegg pour offrir une expérience utilisateur similaire.",
		lien: 'https://github.com/Vezely/Newegg_Clone',
		technologies: ['HTML5#', 'CSS3', 'Javascript', 'React', 'Nextjs', 'MySql'],
		nbLike: 2399,
		width: 2560,
		height: 1380,
		lien_site: null,
		annee: '2023',
	},
];

export default images;
