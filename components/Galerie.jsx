import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Galerie.module.css';
import Popup from './Popup';
import Image from 'next/image';
import projets from './projets';
const Galerie = () => {
	const [likes, setLikes] = useState({});

	const [fullImage, setFullImage] = useState();
	const [titre, setTitre] = useState();
	const [width, setWidth] = useState();
	const [height, setHeight] = useState();
	const [description, setDescription] = useState();
	const [lien, setLien] = useState();
	const [lien_site, setLien_site] = useState();
	const [tethnologie, setTethnologie] = useState();

	useEffect(() => {
		const storedLikes = JSON.parse(localStorage.getItem('likes'));
		if (storedLikes) {
			setLikes(storedLikes);
		}
	}, []);
	function handleLikeButtonClick(id_projet) {
		setLikes((prevState) => {
			const updatedLikes = {
				...prevState,
				[id_projet]: prevState[id_projet] ? prevState[id_projet] + 1 : 1,
			};
			localStorage.setItem('likes', JSON.stringify(updatedLikes));
			return updatedLikes;
		});
	}

	const [voirImage, setVoirImage] = useState(false);

	const [ref, inView] = useInView({
		threshold: 0.1,
	});
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				// opacity: 1,
				y: 0,
				transition: { duration: 1 },
			});
		}
	}, [animation, inView]);

	return (
		<div className={styles.container}>
			{projets.map((img, index) => (
				<motion.div
					ref={ref}
					initial={{ y: -50 }}
					animate={animation}
					key={index}
					className={styles.box + ' ' + 'animate__animated animate__zoomInDown'}>
					<div className={styles.annee}>{img.annee}</div>
					<div className={styles.imgCont}>
						<Image
							width={img.width}
							height={img.height}
							onClick={() => {
								setVoirImage(true);
								setFullImage(img.src);
								setDescription(img.description);
								setTitre(img.titre);
								setLien(img.lien);
								setTethnologie(index);
								setLien_site(img.lien_site);
								setWidth(img.width);
								setHeight(img.height);
							}}
							key={img.id_projet}
							src={img.src}
							alt={img.alt}
							className={styles.imgBox + ' ' + styles.absolute}
						/>
					</div>
					<div className={styles.like}>
						<p>{img.nbLike + (likes[index] || 0)}</p>
						<svg onClick={() => handleLikeButtonClick(index)} viewBox='0 0 24 24'>
							<path d='m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z' />
						</svg>
					</div>
				</motion.div>
			))}
			{voirImage && (
				<Popup
					lien_sites={lien_site}
					Technolo={tethnologie}
					Img={fullImage}
					Width={width}
					Height={height}
					title={titre}
					liens={lien}
					descriptions={description}
					voir={setVoirImage}
				/>
			)}
		</div>
	);
};

export default Galerie;
