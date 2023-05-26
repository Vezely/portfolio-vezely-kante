import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Appropos.module.css';
import logo from '../public/images/vg2.png';
import Image from 'next/image';
const Appropos = () => {
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
		<motion.div ref={ref} initial={{ opacity: 0.95, y: -50, x: -100 }} animate={animation} className={styles.approposContainer}>
			<div className={styles.contenantPhoto}>
				<Image className={styles.photoMoi} width={1007} height={1119} src={logo} alt='photo de moi' />
			</div>
			<div className={styles.vertical}></div>

			<div className={styles.text}>
				<h2 className={styles.titre}>Vezely Kanté</h2>
				<div className={styles.description}>
					<p className={styles.paragraph}>
						Bonjour, je m&apos;appelle Vezely Kanté et je suis un passionné des technologies depuis mon plus jeune âge en Guinée. J&apos;ai
						exploré les programmes informatiques et appris différents langages de programmation pour créer des applications simples.
					</p>
					<p className={styles.paragraph}>
						Après mes études secondaires, j&apos;ai poursuivi ma formation en programmation informatique à la Cité collégiale au Canada, où
						j&apos;ai acquis une solide compréhension des langages de programmation, des bases de données et des concepts clés de
						l&apos;informatique. J&apos;ai travaillé sur plusieurs projets de programmation en classe et en dehors de l&apos;école, y compris
						une application de gestion de tâches pour un ami entrepreneur et un site web pour une organisation à but non lucratif. Ces projets
						m&apos;ont aidé à développer mes compétences et à les appliquer dans des contextes réels.
					</p>
					<p className={styles.paragraph}>
						Je suis maintenant prêt à commencer ma carrière de développeur de logiciels et à continuer à apprendre et à améliorer mes
						compétences en programmation en travaillant dans une entreprise qui me permettra de m&apos;épanouir dans cette industrie
						passionnante en constante évolution.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Appropos;
