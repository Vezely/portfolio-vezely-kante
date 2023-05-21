import Head from 'next/head';
import styles from '../styles/404.module.css';
export default function NotFound() {
	return (
		<>
			<Head>
				<title>A propos</title>
				<meta name='description' content='Page 404' />
				<meta name='theme-color' content='#000000' />
				<meta property='og:title' content='Page a non trouver' />
				<meta property='og:description' content='Page non trouver' />
				<meta property='og:image' content='http://localhost:3000/images/logoU.png' />
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.container_svg}>
						<svg className={styles.svg} id='ghostsSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 560 375'>
							<defs>
								<filter id='a' x='-50%' y='-50%' height='200%' width='200%'>
									<feOffset in='SourceAlpha' result='SA-offset' />
									<feGaussianBlur in='SA-offset' stdDeviation='12' result='SA-o-blur' />
									<feComponentTransfer in='SA-o-blur' result='SA-o-b-contIN'>
										<feFuncA type='table' tableValues='0 1 0.65 0.5 0.55 0.6 0.65 0.55 0.4 0.1 0' />
									</feComponentTransfer>
									<feComposite operator='in' in='SA-o-blur' in2='SA-o-b-contIN' result='SA-o-b-cont' />
									<feComponentTransfer in='SA-o-b-cont' result='SA-o-b-c-sprd'>
										<feFuncA type='linear' />
									</feComponentTransfer>
									<feColorMatrix
										in='SA-o-b-c-sprd'
										values='0 0 0 0 0.412 0 0 0 0 0.992 0 0 0 0 0.847 0 0 0 1 0'
										result='SA-o-b-c-s-recolor'
									/>
									<feTurbulence result='fNoise' type='fractalNoise' numOctaves='6' baseFrequency='1.98' />
									<feColorMatrix in='fNoise' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 7 -3' result='clipNoise' />
									<feComposite operator='arithmetic' in='SA-o-b-c-s-recolor' in2='clipNoise' k1='.04' k2='1' result='SA-o-b-c-s-r-mix' />
									<feMerge>
										<feMergeNode in='SA-o-b-c-s-r-mix' />
										<feMergeNode in='SourceGraphic' />
									</feMerge>
								</filter>
								<filter id='b' x='-50%' y='-50%' height='200%' width='200%'>
									<feOffset in='SourceAlpha' result='SA-offset' />
									<feGaussianBlur in='SA-offset' stdDeviation='7' result='SA-o-blur' />
									<feComponentTransfer in='SA-o-blur' result='SA-o-b-contIN'>
										<feFuncA type='table' tableValues='0 1 0.65 0.5 0.55 0.6 0.65 0.55 0.4 0.1 0' />
									</feComponentTransfer>
									<feComposite operator='in' in='SA-o-blur' in2='SA-o-b-contIN' result='SA-o-b-cont' />
									<feComponentTransfer in='SA-o-b-cont' result='SA-o-b-c-sprd'>
										<feFuncA type='linear' slope='3.8' />
									</feComponentTransfer>
									<feColorMatrix
										in='SA-o-b-c-sprd'
										values='0 0 0 0 0.412 0 0 0 0 0.992 0 0 0 0 0.847 0 0 0 1 0'
										result='SA-o-b-c-s-recolor'
									/>
									<feTurbulence result='fNoise' type='fractalNoise' numOctaves='6' baseFrequency='1.98' />
									<feColorMatrix in='fNoise' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 7 -3' result='clipNoise' />
									<feComposite operator='arithmetic' in='SA-o-b-c-s-recolor' in2='clipNoise' k1='.04' k2='.96' result='SA-o-b-c-s-r-mix' />
									<feMerge>
										<feMergeNode in='SA-o-b-c-s-r-mix' />
										<feMergeNode in='SourceGraphic' />
									</feMerge>
								</filter>
								<filter id='c' x='-50%' y='-50%' height='200%' width='200%'>
									<feOffset in='SourceAlpha' result='SA-offset' />
									<feGaussianBlur in='SA-offset' stdDeviation='4' result='SA-o-blur' />
									<feComponentTransfer in='SA-o-blur' result='SA-o-b-contIN'>
										<feFuncA type='table' tableValues='0 1 0.65 0.5 0.55 0.6 0.65 0.55 0.4 0.1 0' />
									</feComponentTransfer>
									<feComposite operator='in' in='SA-o-blur' in2='SA-o-b-contIN' result='SA-o-b-cont' />
									<feComponentTransfer in='SA-o-b-cont' result='SA-o-b-c-sprd'>
										<feFuncA type='linear' slope='2' />
									</feComponentTransfer>
									<feColorMatrix
										in='SA-o-b-c-sprd'
										values='0 0 0 0 0.412 0 0 0 0 0.992 0 0 0 0 0.847 0 0 0 1 0'
										result='SA-o-b-c-s-recolor'
									/>
									<feTurbulence result='fNoise' type='fractalNoise' numOctaves='6' baseFrequency='1' />
									<feColorMatrix in='fNoise' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 7 -3' result='clipNoise' />
									<feComposite operator='arithmetic' in='SA-o-b-c-s-recolor' in2='clipNoise' k1='.08' k2='.75' result='SA-o-b-c-s-r-mix' />
									<feMerge>
										<feMergeNode in='SA-o-b-c-s-r-mix' />
										<feMergeNode in='SourceGraphic' />
									</feMerge>
								</filter>
							</defs>
							<g id='ghost-all'>
								<g fill='var(--ghost)' filter='url(#a)'>
									<path
										className={styles.ghost + ' ' + styles.body_outline}
										d='M141.7 310.8c-8 0-17.7-6.6-6.5-20.2s13.8-17.2 13.8-17.2c13.5-15.5 13.9-49.2 12.9-59.8-1-10.6-8.8-67 9.5-92.2 15.5-25.6 36.1-32 61.7-31.9 31.5 1.2 48 22.6 52.6 34.6 0 0 21.6 38.4 4.3 107-16.2 64.1-36.4 70.6-51.9 58.8 0 0-6.6-5.1-16.8 6.9-7.5 8.7-20.7 15.5-25.5 7.4 0 0-7.7-13.6-26.4-3.4.1-.1-20.4 10-27.7 10z'
									/>
									<path
										className={styles.ghost + ' ' + styles.arms}
										d='M171.2 189.7c-.2 6.7-42 4.5-47.7-18.5-1.2-4-4.9-6.8-9.3-6.8-5.4 0-9.7 4.4-9.7 9.7 0 1.1.2 2.2.5 3.2 9.4 31.9 47.9 36.2 72.1 64.7M293.1 199.1c1.8 10.9 14.2 35.1 41.3 32.6 4.1-.2 8.1 2.4 9.5 6.5 1.8 5.1-.9 10.7-5.8 12.5-1.1.3-2.1.5-3.2.5-15.7.7-36-5.3-47.7-19.5'
									/>
									<path
										className={styles.ghost_left + ' ' + styles.thumb_right}
										d='M332 233.5s2.8-6-.4-6.8c-3.2-.8-8.8 1.8-8.1 8.7.7 6.9 8.5-1.9 8.5-1.9'
									/>
								</g>
								<path
									className={styles.ghost + ' ' + styles.body_main_color}
									fill='#aefee9'
									d='M154.4 297.4c-4.7 1-15.5-4.2-1.3-14.2s23.3-26.2 19.5-77.1c-.8-9-7.5-56.9 8.1-78.4 13.2-21.8 30.7-27.2 52.4-27.1 26.8 1 40.8 19.2 44.7 29.4 0 0 18.4 32.6 3.7 90.9-13.8 54.5-30.9 60-44.1 50 0 0-5.6-4.3-14.3 5.9-6.4 7.4-14 13.2-21.7 6.3 0 0-10.2-8.9-24.3 1.6-4.6 3.7-15.1 11.1-22.7 12.7z'
									filter='url(#a)'
								/>
								<path
									className={styles.ghost_bright_highlight}
									fill='rgba(255,255,255,.6)'
									d='M200.5 283.2c7.7 7 15.5-.9 21.9-8.4 8.8-10.3 14.4-6 14.4-6 13.3 10.2 30.6 4.6 44.6-50.7 14.9-59.2-3.7-87-3.7-87-4.7-7.8-12.4-22.7-36.5-29.7l-.3-.5c23.4 3.2 33.1 17.5 39.4 29.3 0 0 18.5 33.1 3.7 92.3-13.9 55.3-31.2 60.9-44.6 50.7 0 0-5.7-4.4-14.4 6-6.4 7.5-14.2 13.4-21.9 6.4l-2.6-2.4z'
									filter='url(#b)'
								/>
								<g id='sign'>
									<path
										className={styles.sign}
										d='M165.8 136.9l-11-66.3c-.5-3.2-3.8-6.6-6.6-6.1L30 84.3c-4 .8-5.5 5-5 8.2l11.1 66.2c.5 3.2 3.2 5.5 6 5l59.6-10 7.6 50.2 7.4-1.1-7.7-50.4 52.6-8.8c2.9-.5 4.7-3.5 4.2-6.7z'
										fill='#adadad'
									/>
									<path
										className={styles.sign}
										fill='#fff'
										d='M167.7 134.8l-11-66.3c-.5-3.2-3.2-5.5-6-5L31 83.7c-2.8.5-4.6 3.5-4.1 6.7L38 156.6c.5 3.2 3.2 5.5 6 5l59.6-10 7.6 50.2 7.4-1.1-7.7-50.4 52.6-8.8c2.9-.5 4.7-3.5 4.2-6.7z'
									/>
									<path className={styles.sign} d='M111.2 201.8l7.4-1.1-1.9 2.1-7.4 1.1 1.9-2.1z' fill='#bfbfbf' />
									<path
										className={styles.sign}
										d='M152.3 117.2l-5.4.9 1.6 9.3-9.3 1.6-1.6-9.3-19.2 3.2-1.1-6.6 14.9-32.4 8.8-1.5 4.7 28.3 5.4-.9 1.2 7.4zm-16-4.9l-1.3-7.6c-.2-1.3-.5-3.1-.8-5.6-.3-2.4-.5-3.9-.5-4.3h-.2c-.5 1.8-1.1 3.6-1.9 5.4l-6.2 13.9 10.9-1.8zM112.8 110.3c1.3 7.9 1 13.9-.9 18.1-1.9 4.2-5.6 6.8-10.9 7.7-5.2.9-9.4-.4-12.7-3.9-3.3-3.5-5.6-9-6.9-16.6-1.3-7.9-1-14 .9-18.2s5.6-6.7 10.9-7.6c5.2-.9 9.4.4 12.8 3.9 3.3 3.5 5.6 9 6.8 16.6zm-22 3.7c.9 5.5 2.1 9.4 3.4 11.6 1.4 2.2 3.2 3.2 5.4 2.8 2.2-.4 3.6-1.9 4.2-4.4.6-2.6.4-6.6-.5-12.1s-2.1-9.4-3.5-11.6c-1.4-2.2-3.2-3.2-5.4-2.8-2.2.4-3.6 1.8-4.2 4.4-.5 2.5-.3 6.6.6 12.1zM80.3 129.3l-5.4.9 1.6 9.3-9.3 1.6-1.6-9.3-19.2 3.2-1.1-6.6L60.1 96l8.8-1.5 4.7 28.3 5.4-.9 1.3 7.4zm-15.9-4.9l-1.3-7.6c-.2-1.3-.5-3.1-.8-5.6-.3-2.4-.5-3.9-.5-4.3h-.2c-.5 1.8-1.1 3.6-1.9 5.4l-6.2 13.9 10.9-1.8z'
									/>
								</g>
								<path
									className={styles.ghost + ' ' + styles.sign_thumb}
									fill='var(--ghost)'
									d='M114.7 170.9s-5.8-3.2-6.8 0 1.3 8.9 8.3 8.6c6.8-.4-1.5-8.6-1.5-8.6'
								/>
								<path
									className={styles.ghost + ' ' + styles.arm_highlights}
									fill='var(--ghost-light)'
									d='M160.7 202.3c1.3 0-.1-6.5-.1-6.5-30.4 1.1-39.9-23.3-39.9-23.3s-1.2-2-4.6-2.1c0 0 .3 2.3-1.7 2.1-1.7-.2-3.9-1.2-4.5-.1-.7 1.1.5 5.2 5 5.3 0 0 2.1 0 3.2-.6 0 0 12.7 23.5 41.6 25.3h1zM293.9 210.1l-.9 7.7s9.5 22.2 44.1 22.7h4.7c0-1.1-.9-3.9-3.4-5.7-2.4-1.8-8.2-1.5-8.2-1.5 2.4-4 .5-5.5-1.9-4.8-2.9.9-3.2 4.8-3.1 4.8-21.7-2-31-22.5-31-22.5'
								/>
								<g className={styles.blush} fill='var(--blush)'>
									<ellipse className={styles.ghost + ' ' + styles.blushleft} cx='188.9' cy='169.5' rx='10.4' ry='4.7' />
									<ellipse className={styles.ghost + ' ' + styles.blushleft} cx='266.9' cy='169.5' rx='10.4' ry='4.7' />
								</g>
								<g className={styles.ghost + ' ' + styles.mouths} fill='none' stroke='black'>
									<path
										className={styles.ghost + ' ' + styles.mouth_sad}
										stroke='black'
										fill='none'
										d='M215.5 177.5c2.3-1.1 7.6-3.1 14.3-2.2 4.1.5 7.3 2 9.2 3.1'
									/>
									<path className={styles.ghost + ' ' + styles.mouth_straight} stroke='black' fill='none' d='M220.4 174.6s7-.8 17.6-.4' />
								</g>
								<g id='ghost--eyes'>
									<circle cx='262.4' className={styles.ghost_eye_right} cy='151.2' r='7.5' />
									<circle cx='192.4' className={styles.ghost_eye_left} cy='151.2' r='7.5' />
								</g>
								<ellipse className={styles.ghost_shadow} fill='rgba(105,253,216,.5)' cx='182.7' cy='360' rx='120' ry='15' filter='url(#a)' />

								<g id='ghost-friendly-all'>
									<ellipse
										className={styles.ghost_friendly_shadow}
										fill='rgba(105,253,216,.5)'
										cx='441.4'
										cy='203.4'
										rx='45.1'
										ry='4.6'
										filter='url(#c)'
									/>
									<g className={styles.ghost_friendly} fill='var(--ghost)' filter='url(#c)'>
										<path
											className={styles.ghost_friendly + ' ' + styles.arm_left}
											d='M401.6 132c-1 11.3-6.3 17.7-12.3 23.1-.4.4-.8.7-1.3 1-2.4 1.1-5.4.1-6.6-2.4-1-2-.5-4.4 1.1-5.8 5.3-6.2 8.6-12.5 9.4-23.4'
										/>
										<path
											className={styles.ghost_friendly + ' ' + styles.body_outer}
											d='M387.1 150s5.4-2.6 2.1-3.9c-3.3-1.3-5.1-.1-5.1 1.6 0 1.7 3 2.3 3 2.3M456.7 178.1c-9.6-5.2-13.5 1.7-13.5 1.7-2.5 4.1-9.2.7-13.1-3.8-5.2-6.1-8.6-3.5-8.6-3.5-7.9 6-18.3 2.7-26.6-30.1-8.9-35.1 2.2-54.8 2.2-54.8 3.7-7.8 12.3-13.7 24.2-15.4 11.2-1.6 23.6-.7 34.4 14 9.4 12.9 5.4 41.8 4.9 47.2-.5 5.4-.3 22.7 6.6 30.6 0 0 1.3 1.8 7.1 8.8 5.7 7 .8 10.3-3.3 10.3-3.9.2-14.4-5-14.3-5z'
										/>
										<path
											className={styles.ghost_friendly + ' ' + styles.arm_right_lower}
											d='M434.9 135.7c18.9 3.1 30.9 18.9 47.4 14.6.5-.1 1.1-.3 1.5-.6 2.3-1.4 3.1-4.4 1.7-6.8-1.2-1.9-3.4-2.8-5.4-2.3-11.6 3.6-23.6-14.2-20.7-16.1'
										/>
										<path
											className={styles.ghost_friendly + ' ' + styles.arm_right_upper}
											d='M482.6 144.4s-3.5-1.5-4.2 1.6c.3 2.4 5.4 3 6 1.4.6-2.1-1.8-3-1.8-3M446.9 154.8c8.4-17.8 32.2-24.6 34.8-41.4.1-.5.1-1.1 0-1.7-.4-2.7-2.8-4.6-5.6-4.3-2.2.3-3.9 2-4.3 4.1-1.4 12.1-22.5 15.9-23 12.5'
										/>
										<path
											className={styles.ghost_friendly + ' ' + styles.arm_right_upperthumb}
											d='M473.9 112.2s-.6-3.7-3.6-2.6c-1.8 1.6.5 6.2 2.1 5.7 2.1-.6 1.5-3.1 1.5-3.1'
										/>
									</g>
									<path
										className={styles.ghost_friendly + ' ' + styles.body_hightlight}
										fill='var(--ghost-light)'
										d='M453.4 170.9c-7.3-5.5-12.6-.9-12.6-.9-4 3.6-8 .6-11.3-3.3-4.5-5.3-7.4-3.1-7.4-3.1-6.9 5.2-15.8 2.3-23-26-7.7-30.4 1.9-47.4 1.9-47.4 2-5.3 9.3-14.8 23.3-15.3 11.3 0 20.4 2.8 27.3 14.1 8.1 11.2 4.6 36.1 4.2 40.8-2 26.5 2.7 34.9 10.1 40.1 7.4 5.2 1.8 7.9-.7 7.4-3.9-.7-9.4-4.5-11.8-6.4z'
									/>
									<path
										className={styles.ghost_friendly + ' ' + styles.body_hightlight_bright}
										fill='var(--ghost-highlight)'
										d='M447.3 165.3c-6-4.9-10.3-.8-10.3-.8-3.2 3.2-6.5.5-9.2-2.9-3.7-4.7-6-2.7-6-2.7-5.6 4.6-12.9 2.1-18.7-23.2-6.2-27 1.5-42.2 1.5-42.2 1.6-4.7 7.6-13.2 18.9-13.6 9.2 0 16.6 2.5 22.2 12.6 6.6 9.9 3.8 32.1 3.4 36.3-1.6 23.6 2.2 31.1 8.2 35.7 6 4.6 1.4 7-.5 6.6-3.1-.7-7.5-4.1-9.5-5.8z'
									/>

									<path
										className={styles.ghost_friendly + ' ' + styles.mouth_smile_small}
										fill='black'
										d='M433.1,117.5c1.1-0.6,1-1,0.8-1.3c-0.2-0.5-0.8-0.2-0.8-0.2c-4.3,2-8.6,1.8-12.6,0 c0,0-0.5-0.2-0.8,0.3c-0.2,0.4-0.2,0.8,0.8,1.2C424.5,119.3,428.8,119.5,433.1,117.5z'
									/>
									<path
										className={styles.ghost_friendly + ' ' + styles.mouth_curious}
										fill='black'
										d='M432.8,116.9c0-1.6-2.8-2.9-6.2-2.9s-6.2,1.3-6.2,2.9s2.8,2.9,6.2,2.9S432.8,118.5,432.8,116.9'
									/>
									<path
										className={styles.ghost_friendly + ' ' + styles.mouth_surprised}
										fill='black'
										d='M431.8,119.9c0-4.4-2.2-8-5-8s-5,3.6-5,8s2.2,8,5,8S431.8,124.3,431.8,119.9'
									/>
									<path
										className={styles.ghost_friendly + ' ' + styles.mouth_smile}
										fill='black'
										stroke='none'
										d='M427,122.9c4.1,0,7.4-3.2,7.6-7.3c0.3-1.8-1.2-1.3-1.2-1.3c-1.6,0.5-3.9,0.7-6.4,0.7h-0.4 c-2.5,0-4.7-0.1-6.4-0.7c0,0-1.5-0.5-1.2,1.3c0.2,4,3.6,7.2,7.6,7.3H427z'
									/>
									<path
										className={styles.ghost_friendly + ' ' + styles.mouth_smile_tongue}
										fill='var(--blush)'
										stroke='none'
										d='M426.9,122.3c1.9,0,3.5-0.6,4.4-1.6c-0.9-1-2.6-1.7-4.6-1.7c-1.9,0-3.5,0.6-4.4,1.6 C423.2,121.6,425,122.3,426.9,122.3'
									/>
									<g>
										<path
											className={styles.ghost_friendly + ' ' + styles.eyes_happy + ' ' + styles.eyes}
											d='M452.2 105.4c0 2.8-2.3 5-5 5s-5-2.3-5-5c0-2.8 2.3-5 5-5s5 2.2 5 5M411.4 105.4c0 2.8-2.3 5-5 5-2.8 0-5-2.3-5-5 0-2.8 2.3-5 5-5 2.8-.1 5 2.2 5 5'
										/>
									</g>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</main>
		</>
	);
}
