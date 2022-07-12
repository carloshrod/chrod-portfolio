import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import './MyProjects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slides from "./Slides";

const MyProjects = () => {
    const { texts } = useContext(LanguageContext)

    return (
        <div className="my-projects-container" id="projects">
            <div className="my-projects-title">
                <h2>{texts.projectsLabel}</h2>
                <i className='bx bx-like bx-sm bx-tada' />
            </div>
            <div className="carousel-container">
                <Carousel
                    autoPlay
                    interval={10000}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                >
                    {Slides}
                </Carousel>
            </div>
        </div>
    );
};

export default MyProjects;
