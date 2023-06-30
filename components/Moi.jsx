import Image from 'next/image';
import React from 'react';
import styles from '../styles/Moi.module.css';

const Moi = () => {
	return (
		<div className={styles.container}>
			<div>
				<Image width={800} height={600} src='/images/dev.gif' alt='image' />
			</div>
		</div>
	);
};

export default Moi;
