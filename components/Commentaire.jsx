import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import styles from '../styles/Commentaire.module.css';
import commentaires from './commentaires';

const Commentaire = () => {
	const [voir, setVoir] = useState(false);
	const [comments, setComments] = useState([]);

	const voir_form = () => {
		setVoir(!voir);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		let response = await fetch('/api/addCommentaire', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const newComments = [...comments, data];
			setComments(newComments);
			localStorage.setItem('comments', JSON.stringify(newComments));
			reset();
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedComments = localStorage.getItem('comments');
			if (storedComments) {
				setComments(JSON.parse(storedComments));
			}
		}
	}, []);

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
				transition: { duration: 1 },
			});
		}
	}, [animation, inView]);

	return (
		<motion.div ref={ref} initial={{ opacity: 0.9, y: -50, x: -100 }} animate={animation} className={styles.container}>
			<h2>Ce que les gens disent de mon dernier portfolio</h2>
			<div className={styles.container_commentaire}>
				{commentaires.map((commentaire, index) => (
					<div className={styles.box} key={index}>
						<div>
							<div className={styles.nom_commentataire}>{commentaire.nom}</div>
							<div className={styles.ville_pays}>{commentaire.ville_pays}</div>
						</div>

						<p>{commentaire.commentaire}</p>
					</div>
				))}
			</div>
			<div className={styles.container_commentaire}>
				{comments.map((comment, index) => (
					<div className={styles.box} key={index}>
						<div>
							<div className={styles.nom_commentataire}>{comment.nom}</div>
							<div className={styles.ville_pays}>{comment.ville_pays}</div>
						</div>
						<p>{comment.commentaire}</p>
					</div>
				))}
			</div>
			<div className={styles.popup_comment}>
				<svg onClick={voir_form} width='24' height='24'>
					<path d='M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75' />
				</svg>
			</div>
			{voir && (
				<form className={styles.form + ' ' + 'animate__animated animate__backInLeft'} onSubmit={handleSubmit(onSubmit)} noValidate>
					<p>Merci de donner vos commentaires sur mon portfolio</p>
					<div className={styles.double_input}>
						<input
							{...register('nom', {
								required: 'Veuillez renseignez votre nom',
								minLength: {
									value: 2,
									message: 'Ce champ doit avoir au moins 2 caractères',
								},
							})}
							className={styles.prenomNom + ' ' + styles.taille}
							type='text'
							placeholder='Nom'
						/>
						{errors.nom && <p className={styles.errors + ' ' + 'animate__animated animate__shakeX'}>{errors.nom.message}</p>}
						<input
							{...register('ville_pays', {
								required: 'Le champ Ville est réquis',
								minLength: {
									value: 5,
									message: 'Ce champ doit avoir au moins 5 caractères',
								},
							})}
							className={styles.localisation + ' ' + styles.taille}
							type='text'
							placeholder='Ville, Pays'
						/>
						{errors.ville_pays && <p className={styles.errors + ' ' + 'animate__animated animate__shakeX'}>{errors.ville_pays.message}</p>}
					</div>
					<textarea
						{...register('commentaire', {
							required: 'Le champ commentaire est réquis',
							minLength: {
								value: 10,
								message: 'Le commentaire doit avoir au moins 10 caractères',
							},
						})}
						className={styles.text}
						placeholder='Votre commentaire ici...'></textarea>
					{errors.commentaire && <p className={styles.errors + ' ' + 'animate__animated animate__shakeX'}>{errors.commentaire.message}</p>}
					<button className={styles.button}>
						<p>Commenter</p>
						<svg>
							<path d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
						</svg>
					</button>

					<label>
						<svg onClick={voir_form} className={styles.close} viewBox='0 0 24 24'>
							<path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
						</svg>
					</label>
				</form>
			)}
		</motion.div>
	);
};
export default Commentaire;
