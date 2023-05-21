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
		</div>
	);
};

export default GalerieVideos;
