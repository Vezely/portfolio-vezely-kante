import React, { useEffect, useState } from 'react';
import styles from '../styles/Popup.module.css';
import Image from 'next/image';
import projets from './projets';
const Popup = ({ voir, img, Img, Width, Height, title, liens, descriptions, Technolo, lien_sites }) => {
	const [fullImage, setFullImage] = useState(Img);
	const [titre, setTitre] = useState(title);
	const [width, setWidth] = useState(Width);
	const [height, setHeight] = useState(Height);
	const [description, setDescription] = useState(descriptions);
	const [lien, setLien] = useState(liens);
	const [lien_site, setLien_site] = useState(lien_sites);
	const [lien_existe, setLien_existe] = useState(lien_sites);
	const [tethnologie, setTethnologie] = useState(Technolo);

	return (
		<div className={styles.main}>
			<input type='checkbox' id='checkbox' className={styles.checkbox} />
			<div className={styles.container + ' ' + 'animate__animated animate__zoomIn'}>
				<div className={styles.igmLigne}>
					{projets.map((img, index) => (
						<Image
							width={img.width}
							height={img.height}
							key={index}
							onClick={() => {
								setFullImage(img.src);
								setDescription(img.description);
								setTitre(img.titre);
								setLien(img.lien);
								setLien_site(img.lien_site);
								setTethnologie(index);
								setWidth(img.width);
								setHeight(img.height);
								setLien_existe(img.lien_site);
							}}
							className={styles.imgs + ' ' + 'animate__animated animate__bounceInLeft'}
							src={img.src}
							alt={img.alt}></Image>
					))}
				</div>
				<div className={styles.imgVueContainer}>
					<div className={styles.techImg}>
						<Image
							width={width || Width}
							height={height || Height}
							layout='responsive'
							className={styles.imgVue + ' ' + 'animate__animated animate__zoomInDown'}
							src={fullImage || img.src}
							alt='image'
						/>
						<div className={styles.technologies}>
							<h3 className={styles.titre + ' ' + 'animate__animated animate__jackInTheBox'}>Technologies utilisées</h3>
							<ul className={styles.ul}>
								{projets[tethnologie].technologies.map((tech, index) => (
									<li key={index} className={styles.li}>
										{tech}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className={styles.descrip}>
						<h3 className={styles.titre + ' ' + 'animate__animated animate__jackInTheBox'}>{titre}</h3>
						<p className={styles.texte + ' ' + 'animate__animated animate__zoomInUp'}>{description}</p>
					</div>
				</div>
				<a className={styles.lien} href={lien} target='_blank' rel='noreferrer'>
					<svg width='24' height='24'>
						<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z' />
					</svg>
				</a>
				{lien_existe && (
					<a className={styles.visiter} href={lien_site} target='_blank' rel='noreferrer'>
						<button className={styles.button}>
							{' '}
							Visiter le site
							<svg className={styles.bi + ' ' + styles.bi_arrow_right} fill='currentColor' height='20' width='20'>
								<path d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'></path>
							</svg>
						</button>
					</a>
				)}
				<label htmlFor='checkbox'>
					<svg onClick={() => voir(false)} className={styles.close} viewBox='0 0 24 24'>
						<path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
					</svg>
				</label>
			</div>
		</div>
	);
};

export default Popup;
