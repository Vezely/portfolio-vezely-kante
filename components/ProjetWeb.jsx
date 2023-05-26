import React, { useEffect, useState } from 'react';
import styles from '../styles/Galerie.module.css';
import PopupImgW from './PopupImgW';
import Image from 'next/image';
import projets from './projets';
const ProjetWeb = () => {
	const [likes, setLikes] = useState({});

	const [fullImage, setFullImage] = useState();
	const [titre, setTitre] = useState();
	const [width, setWidth] = useState();
	const [height, setHeight] = useState();
	const [description, setDescription] = useState();
	const [lien, setLien] = useState();
	const [lien_site, setLien_site] = useState();
	const [tethnologie, setTethnologie] = useState();
	const webImages = projets.filter((image) => image.type === 'web');

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
	return (
		<div className={styles.container}>
			{webImages.map((img, index) => (
				<div key={index} className={styles.box + ' ' + 'animate__animated animate__zoomInDown'}>
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
								setLien_site(img.lien_site);
								setTethnologie(index);
								setWidth(img.width);
								setHeight(img.height);
							}}
							key={index}
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
				</div>
			))}
			{voirImage && (
				<PopupImgW
					Technolo={tethnologie}
					Img={fullImage}
					title={titre}
					Width={width}
					Height={height}
					liens={lien}
					lien_site={lien_site}
					descriptions={description}
					voir={setVoirImage}
				/>
			)}
		</div>
	);
};

export default ProjetWeb;
