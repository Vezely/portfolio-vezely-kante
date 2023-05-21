import styles from '../styles/Main.module.css';
import Appropos from './Appropos';
import Commentaire from './Commentaire';
import Competances from './Competances';
import Contact from './Contact';
import Galerie from './Galerie';

import HeadProjets from './HeadProjets';
import Services from './Services';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<HeadProjets />
				<Galerie />
				<Appropos />
				<Services />
				<Commentaire />
				<Competances />
				<Contact />
			</div>
		</main>
	);
}
