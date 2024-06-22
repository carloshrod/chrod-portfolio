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
					'https://api.github.com/repos/carloshrod/chrod-portfolio/contents/projects'
				);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const files = await response.json();

				const jsonFiles = files.filter(file => file.name.endsWith('.json'));
				const projectPromises = jsonFiles.map(async file => {
					const fileResponse = await fetch(file.download_url);
					if (!fileResponse.ok) {
						throw new Error('Failed to fetch project file');
					}
					return await fileResponse.json();
				});

				const projectsData = await Promise.all(projectPromises);
				setSlides(projectsData);
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
						delay: 5000,
						disableOnInteraction: false,
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
