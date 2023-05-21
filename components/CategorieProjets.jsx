import React, { useState } from 'react';
import styles from '../styles/CategorieProjets.module.css';
import Galerie from './Galerie';
import ProjetBu from './ProjetBu';
import ProjetWeb from './ProjetWeb';

import Videos from './Videos';
const CategorieProjets = () => {
	const [selectedCategory, setSelectedCategory] = useState('TOUT');

	const toggleCategory = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className={styles.contenu}>
			<div className={styles.container}>
				<h2 className={styles.porfolioH3}>Projets</h2>
				<ul className={styles.categorie}>
					<li className={styles.buttonContenant}>
						<button
							onClick={() => toggleCategory('TOUT')}
							className={`${styles.button} ${selectedCategory === 'TOUT' ? styles.buttonSelected : ''}`}>
							TOUT
						</button>
					</li>
					<li className={styles.buttonContenant}>
						<button
							onClick={() => toggleCategory('WEB')}
							className={`${styles.button} ${selectedCategory === 'WEB' ? styles.buttonSelected : ''}`}>
							WEB
						</button>
					</li>
					<li className={styles.buttonContenant}>
						<button className={styles.button}>MOBILE</button>
					</li>
					<li className={styles.buttonContenant}>
						<button
							onClick={() => toggleCategory('BUREAU')}
							className={`${styles.button} ${selectedCategory === 'BUREAU' ? styles.buttonSelected : ''}`}>
							BUREAU
						</button>
					</li>
					<li className={styles.buttonContenant}>
						<button
							onClick={() => toggleCategory('VIDEOS')}
							className={`${styles.button} ${selectedCategory === 'VIDEOS' ? styles.buttonSelected : ''}`}>
							VIDEOS
						</button>
					</li>
				</ul>
			</div>
			{selectedCategory === 'VIDEOS' && <Videos />}
			{selectedCategory === 'TOUT' && <Galerie />}
			{selectedCategory === 'WEB' && <ProjetWeb />}
			{selectedCategory === 'BUREAU' && <ProjetBu />}
		</div>
	);
};

export default CategorieProjets;
