import Link from 'next/link';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import profile from '../public/images/profile.png';

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		let response = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		if (response.ok) {
			window.location.reload();
		}
	};
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
		<motion.div ref={ref} initial={{ opacity: 0.9, y: -50, x: -100 }} animate={animation} className={styles.contenant}>
			<div className={styles.profileContenaire}>
				<Image className={styles.profile} width={1016} height={1008} src={profile} alt='image' />
			</div>
			<div className={styles.contact}>
				<h2 className={styles.retrouverMoiH3}>Contactez-moi</h2>
				<p>N&apos;hésitez pas à me contacter pour tout renseignement. Nous étudierons ensemble la meilleure formule pour votre projet.</p>
				<div className={styles.ContactDiv}>
					<svg width='24' height='24'>
						<path d='M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602' />
					</svg>

					<a target='-blank' className={styles.link} href='https://goo.gl/maps/Wbr3HufAfabQPRkJA'>
						Rue Saint André
					</a>
				</div>
				<div className={styles.ContactDiv}>
					<svg width='24' height='24'>
						<path d='M18 24h-12c-1.104 0-2-.896-2-2v-20c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v20c0 1.104-.896 2-2 2zm1-5.083h-14v3.083c0 .552.449 1 1 1h12c.552 0 1-.448 1-1v-3.083zm-7 3c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm7-17h-14v13h14v-13zm-1-3.917h-12c-.551 0-1 .449-1 1v1.917h14v-1.917c0-.551-.448-1-1-1zm-4.5 1.917h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s-.224.5-.5.5z' />
					</svg>
					<Link className={styles.link} href='tel:8196392775'>
						+1 (819) 639 2775
					</Link>
				</div>
				<div className={styles.ContactDiv}>
					<svg width='24' height='24'>
						<path d='M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z' />
					</svg>
					<Link
						className={styles.link}
						href='https://mail.google.com/mail/u/0/#inbox?compose=XBcJlMBDCRtQnJZNBPxbcxLbfFPdFWVjpCZpdbrdsCDjZtkBgmcqWwrPJDmwphMxktZqDZBtKRplNfRb'>
						Envoyer un Mail
					</Link>
				</div>
			</div>

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
				<p>Parlez-moi de votre projet !</p>
				<input
					{...register('prenomNom', {
						required: 'Le champ Nom est réquis',
						minLength: {
							value: 2,
							message: 'Ce champ doit avoir au moins 2 caractères',
						},
					})}
					className={styles.prenomNom + ' ' + styles.taille}
					type='text'
					placeholder='Nom'
				/>
				{errors.prenomNom && <p className={styles.errors + ' ' + 'animate__animated animate__shakeX'}>{errors.prenomNom.message}</p>}
				<input
					{...register('email', {
						required: 'Le champ email est réquis',
						pattern: {
							value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
							message: "Le courriel n'est pas valide",
						},
					})}
					className={styles.email + ' ' + styles.taille}
					type='email'
					placeholder='Email'
				/>
				{errors.email && <p className={styles.errors + ' ' + 'animate__animated animate__shakeX'}>{errors.email.message}</p>}
				<textarea
					{...register('message', {
						required: 'Le champ message est réquis',
						minLength: {
							value: 10,
							message: 'Le message doit avoir au moins 10 caractères',
						},
					})}
					className={styles.text}
					placeholder='Votre message ici..'></textarea>
				{errors.message && <p className={styles.errors + ' ' + 'animate__animated animate__shakeX'}>{errors.message.message}</p>}
				<button className={styles.button}>
					<div>
						<div className={styles.svg_wrapper}>
							<svg height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path d='M0 0h24v24H0z' fill='none'></path>
								<path d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'></path>
							</svg>
						</div>
					</div>
					<span>Envoyer</span>
				</button>
			</form>
		</motion.div>
	);
};

export default Contact;
