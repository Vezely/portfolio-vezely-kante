import React from 'react';
import styles from '../styles/GVideos.module.css';

const GalerieVideos = ({ videos }) => {
	return (
		<div className={styles.container}>
			{videos.map((video, index) => (
				<div key={index} className={styles.box + ' ' + 'animate__animated animate__zoomInDown'}>
					<video controls src={video.src} className={styles.videoBox + ' ' + styles.absolute}></video>
					<div className={styles.titre}>{video.titre}</div>
				</div>
			))}
			<div className={styles.box + ' ' + 'animate__animated animate__zoomInDown'}>
				<iframe
					// width='728'
					// height='473'
					src='https://www.youtube.com/embed/QEnNuly1X9s'
					title='NewEgg Clône'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
					className={styles.iframe}></iframe>
				<div className={styles.titre}>Newegg clône</div>
			</div>
		</div>
	);
};

export default GalerieVideos;
