import React, { useState, useEffect } from 'react';
import styles from '../styles/Details.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Details = () => {
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
		<div className={styles.container}>
			<motion.div className={styles.etapeContainer} ref={ref} initial={{ y: -50, x: -100 }} animate={animation}>
				<h2>Compétences</h2>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>✓</div>
						</div>
						<span></span>
					</div>
					<div className={styles.descriptionLangage}>
						<h4>JavaScript</h4>
						<p>
							• Expérimenté en développement front-end et back-end avec JavaScript et son écosystème (Node.js, Express, React, Angular, etc.).
						</p>
						<p>• Connaissance approfondie des concepts avancés de JavaScript, tels que les promesses, les générateurs et les modules.</p>
						<p>• Création d&apos;une application de chat en temps réel avec Node.js et Express.</p>
					</div>
				</div>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>✓</div>
						</div>
						<span></span>
					</div>
					<div className={styles.descriptionLangage}>
						<h4>Java</h4>
						<p>
							• Compétent en développement d&apos;applications Java pour diverses plateformes, y compris les applications de bureau, les
							services web et les applications mobiles (Android).
						</p>
						<p>
							• Connaissance approfondie des concepts de programmation orientée objet et de la bibliothèque standard Java (collections,
							threads, etc.).
						</p>
						<p>• Création d&apos;une application mobile Android pour suivre les dépenses personnelles en utilisant Java et SQLite.</p>
					</div>
				</div>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>✓</div>
						</div>
						<span></span>
					</div>
					<div className={styles.descriptionLangage}>
						<h4>C#</h4>
						<p>
							• Expérimenté en développement d&apos;applications .NET avec C#, y compris les applications de bureau, les services web et les
							applications mobiles (Xamarin).
						</p>
						<p>• Maîtrise des concepts de programmation orientée objet et de la bibliothèque standard .NET.</p>
						<p>
							• Développé une application de gestion des employés avec C# et WPF, incluant la gestion des données, des autorisations et des
							rapports.
						</p>
					</div>
				</div>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>✓</div>
						</div>
						<span></span>
					</div>
					<div className={styles.descriptionLangage}>
						<h4>MySQL</h4>
						<p>• Compétent en création, gestion et optimisation de bases de données MySQL.</p>
						<p>• Expérience en écriture de requêtes SQL complexes pour extraire et manipuler des données.</p>
					</div>
				</div>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>✓</div>
						</div>
						<span></span>
					</div>
					<div className={styles.descriptionLangage}>
						<h4>SQL Server</h4>
						<p>• Expérience en création, gestion et optimisation de bases de données avec Microsoft SQL Server.</p>
						<p>
							• Familiarité avec les concepts et fonctionnalités avancées de SQL Server, tels que les procédures stockées, les fonctions
							définies par l&apos;utilisateur et l&apos;optimisation des performances.
						</p>
					</div>
				</div>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>✓</div>
						</div>
						<span></span>
					</div>
					<div className={styles.descriptionLangage}>
						<h4>React</h4>
						<p>• Expérimenté en développement d&apos;applications web modernes avec React et son écosystème (Redux, React Router, etc.).</p>
						<p>• Maîtrise des concepts clés de React, tels que les composants, l&apos;état et le cycle de vie.</p>
					</div>
				</div>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>✓</div>
						</div>
						<span></span>
					</div>
					<div className={styles.descriptionLangage}>
						<h4>Next.js</h4>
						<p>• Expérimenté en développement d&apos;applications web modernes et performantes avec Next.js, un framework basé sur React.</p>
						<p>
							• Maîtrise des concepts clés de Next.js, tels que le rendu côté serveur (SSR), la génération statique de sites (SSG), et la
							création d&apos;API avec les fonctions API.
						</p>
						<p>
							• Familiarité avec les optimisations de performance et les fonctionnalités avancées de Next.js, telles que le chargement
							d&apos;images optimisé et la mise en cache des données.
						</p>
					</div>
				</div>
				<div className={styles.etape}>
					<div className={styles.tiret}>
						<div className={styles.rond}>
							<div>⇩</div>
						</div>
						{/* <span></span> */}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Details;
