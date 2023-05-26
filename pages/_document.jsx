import { Html, Head, Main, NextScript } from 'next/document';

// import styles from '../styles/body.module.css';

export default function Document() {
	return (
		<Html lang='fr'>
			<Head />
			<link rel='icon' href='/logoU.png' />
			<link rel='apple-touch-icon' sizes='180x180' href='/logoU.png' />

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
