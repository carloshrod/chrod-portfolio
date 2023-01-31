import Slides from "./Slides";
import { useLanguageContext } from "../hooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay, EffectCube } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cube';

const MyProjects = () => {
    const { texts } = useLanguageContext()

    return (
        <div className="my-projects-container" id="projects">
            <div className="my-projects-title">
                <h2>{texts.projectsLabel}</h2>
                <i className='bx bx-like bx-sm bx-tada' />
            </div>
            <Swiper
                modules={[Navigation, Keyboard, Autoplay, EffectCube]}
                spaceBetween={20}
                slidesPerView={1}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "1.5rem",
                    "--swiper-pagination-color": "#fff",
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
                effect="cube"
            >
                {Slides.map((slide, i) => (
                    <SwiperSlide key={i}>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MyProjects;
