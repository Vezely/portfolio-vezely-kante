import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Service.module.css';
import Image from 'next/image';
import webDev from '../public/images/webDev.gif';
import oneMobie from '../public/images/oneMobie.gif';
import ux from '../public/images/ux.gif';
import back_end from '../public/images/back_end.gif';
import perform from '../public/images/perform.gif';
import dev from '../public/images/dev.gif';
const Services = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
	});

	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
				x: 0,
				transition: { duration: 2 },
			});
		} else {
			animation.start({
				opacity: 0,
				y: -50,
				transition: { duration: 1 },
			});
		}
	}, [animation, inView]);
	return (
		<div className={styles.container}>
			<h2>Les services que j&apos;offre</h2>
			<motion.div ref={ref} initial={{ opacity: 0.9, y: -50, x: -100 }} animate={animation} className={styles.container_service}>
				<div className={styles.vide}>
					<div className={styles.flip}>
						<div className={styles.content}>
							<div className={styles.front}>
								<svg width='24' height='24' viewBox='0 0 24 24'>
									<path d='M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z' />
								</svg>
								<h3>Développement Web</h3>
								<Image width={796} height={673} src={webDev} className={styles.image} alt='image web devoloppement' />
							</div>
							<div className={styles.back}>
								<h3>Développement Web</h3>

								<p>
									Création de sites web professionnels, responsives et optimisés pour les moteurs de recherche. Utilisation des dernières
									technologies et frameworks tels que HTML5, CSS3, JavaScript, React, Angular, Vue.js, etc.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.vide}>
					<div className={styles.flip}>
						<div className={styles.content}>
							<div className={styles.front}>
								<svg width='24' height='24' viewBox='0 0 24 24'>
									<path d='M6.02 7.389c.399-.285.85-.417 1.292-.417.944 0 1.852.6 2.15 1.599-.382-.294-.83-.437-1.281-.437-.458 0-.919.147-1.321.434-.799.57-1.153 1.541-.845 2.461-1.242-.89-1.247-2.747.005-3.64zm3.741 12.77c.994.334 4.071 1.186 7.635 3.841l6.604-4.71c-1.713-2.402-1.241-4.082-2.943-6.468-1.162-1.628-1.827-1.654-3.037-1.432l.599.84c.361.507-.405 1.05-.764.544l-.534-.75c-.435-.609-1.279-.229-2.053-.051l.727 1.019c.36.505-.403 1.051-.764.544l-.629-.882c-.446-.626-1.318-.208-2.095-.01l.769 1.078c.363.508-.405 1.049-.764.544l-3.118-4.366c-.968-1.358-3.088.083-2.086 1.489l4.605 6.458c-.494-.183-1.363-.349-1.93-.349-1.754 0-2.429 1.92-.222 2.661zm-3.286-2.159h-4.475v-14h10v6.688l2-.471v-8.217c0-1.104-.895-2-2-2h-10c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 1.812 0 3.619-.299 4.944-.894-2.121-.946-6.378-1.576-5.474-5.106z' />
								</svg>
								<h3>Développement d&apos;applications mobiles </h3>
								<Image width={2560} height={1707} src={oneMobie} className={styles.image} alt='image web devoloppement' />
							</div>
							<div className={styles.back}>
								<h3>Développement d&apos;applications mobiles </h3>

								<p>
									Conception et développement d&apos;applications mobiles natives ou hybrides pour Android et iOS, en utilisant des outils
									tels que React Native, Java, Swift ou Kotlin.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.vide}>
					<div className={styles.flip}>
						<div className={styles.content}>
							<div className={styles.front}>
								<svg width='24' height='24'>
									<path d='M24 23h-20c-2.208 0-4-1.792-4-4v-15.694c.313-1.071 1.285-2.306 3-2.306 1.855 0 2.769 1.342 2.995 2.312l.005 1.688h18v18zm-1-17h-17v13s-.665-1-2-1c-1.104 0-2 .896-2 2s.896 2 2 2h19v-16zm-18-2.68c-.427-.971-1.327-1.325-2-1.32-.661.005-1.568.3-2 1.32v16.178c.394-1.993 2.245-2.881 4-2.401v-13.777zm15 15.68h-12v-10h12v10zm-8-9h-3v8h10v-4h-2v3h-1v-3h-3v3h-1v-7zm7 0h-6v3h6v-3z' />
								</svg>
								<h3>Conception d&apos;interfaces utilisateur (UI) et expérience utilisateur (UX)</h3>
								<Image width={320} height={200} src={ux} className={styles.image} alt='image web devoloppement' />
							</div>
							<div className={styles.back}>
								<h3>Conception d&apos;interfaces utilisateur (UI) et expérience utilisateur (UX) </h3>

								<p>
									Création de designs d&apos;interfaces utilisateur attrayants, intuitifs et fonctionnels pour les applications web, mobiles
									ou de bureau, ainsi que l&apos;optimisation de l&apos;expérience utilisateur.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.vide}>
					<div className={styles.flip}>
						<div className={styles.content}>
							<div className={styles.front}>
								<svg width='24' height='24' viewBox='0 0 24 24'>
									<path d='M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z' />
								</svg>
								<h3>Développement backend</h3>
								<Image width={1080} height={608} src={back_end} className={styles.image} alt='image web devoloppement' />
							</div>
							<div className={styles.back}>
								<h3>Développement backend</h3>

								<p>
									Conception et développement de solutions backend pour la gestion de bases de données, l&apos;authentification et
									l&apos;autorisation d&apos;utilisateurs, le traitement des données, etc.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.vide}>
					<div className={styles.flip}>
						<div className={styles.content}>
							<div className={styles.front}>
								<svg width='24' height='24'>
									<path d='M24 3h-24v-2h24v2zm-6 3h-12v2h12v-2zm6 5h-24v2h24v-2zm-6 5h-12v2h12v-2zm6 5h-24v2h24v-2z' />
								</svg>
								<h3>Formation et consultation en programmation</h3>
								<Image width={1246} height={862} src={dev} className={styles.image} alt='image web devoloppement' />
							</div>
							<div className={styles.back}>
								<h3>Formation et consultation en programmation</h3>

								<p>
									Offre de services de formation et de consultation en programmation pour les individus et les organisations cherchant à
									améliorer leurs compétences en développement.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.vide}>
					<div className={styles.flip}>
						<div className={styles.content}>
							<div className={styles.front}>
								<svg width='24' height='24' viewBox='0 0 24 24'>
									<path d='M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z' />
								</svg>
								<h3>Optimisation des performances des sites</h3>
								<Image width={620} height={400} src={perform} className={styles.image} alt='image web devoloppement' />
							</div>
							<div className={styles.back}>
								<h3>Optimisation des performances des sites</h3>

								<p>
									Analyse et optimisation des performances des applications web, mobiles ou de bureau pour améliorer la rapidité et
									l&apos;efficacité.
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Services;
