import Slides from './Slides';
import { useLanguageContext } from '../hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay, EffectFlip } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-flip';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MyProjects = () => {
	const { texts } = useLanguageContext();
	const [slides, setSlides] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://api.github.com/repos/carloshrod/chrod-portfolio/contents/projects',
				);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const files = await response.json();

				const jsonFiles = files.filter(file => file.name.endsWith('.json'));

				// Obtener contenido del archivo y fecha del primer commit (creación)
				const projectPromises = jsonFiles.map(async file => {
					const fileResponse = await fetch(file.download_url);

					if (!fileResponse.ok) {
						throw new Error('Failed to fetch project data');
					}

					const projectData = await fileResponse.json();

					// Obtener todos los commits del archivo para encontrar el primero
					const commitsResponse = await fetch(
						`https://api.github.com/repos/carloshrod/chrod-portfolio/commits?path=${file.path}&per_page=100`,
					);

					if (commitsResponse.ok) {
						const commits = await commitsResponse.json();
						// El último elemento del array es el primer commit (creación del archivo)
						const firstCommitDate =
							commits[commits.length - 1]?.commit?.author?.date;

						return {
							...projectData,
							_creationDate: firstCommitDate,
						};
					}

					return projectData;
				});

				const projectsData = await Promise.all(projectPromises);

				// Ordenar por fecha de creación descendente (más reciente primero)
				const sortedProjects = projectsData.sort((a, b) => {
					if (!a._creationDate) return 1;
					if (!b._creationDate) return -1;
					return new Date(b._creationDate) - new Date(a._creationDate);
				});

				setSlides(sortedProjects);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='my-projects-container' id='projects'>
			<motion.div
				className='my-projects-title'
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ type: 'spring', stiffness: 50 }}
				viewport={{ once: true }}
			>
				<h2>{texts.projectsLabel}</h2>
				<i className='bx bx-like bx-sm bx-tada' />
			</motion.div>
			<motion.div
				className='swiperContainer'
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
				viewport={{ once: true }}
			>
				<Swiper
					key={slides.length}
					modules={[Navigation, Keyboard, Autoplay, EffectFlip]}
					spaceBetween={20}
					slidesPerView={1}
					style={{
						'--swiper-navigation-color': '#fff',
						'--swiper-navigation-size': '1.5rem',
						'--swiper-pagination-color': '#fff',
					}}
					navigation
					keyboard={{
						enabled: true,
					}}
					autoplay={{
						delay: 10000,
						disableOnInteraction: true,
					}}
					loop={true}
					effect='flip'
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={`slide-${index}`}>
							<Slides slide={slide} />
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</div>
	);
};

export default MyProjects;
