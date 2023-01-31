import { projectsInfo } from "../utils/projectsInfo";

const Slides = projectsInfo.map((slide, index) => (
    <div key={index} className="slide-container">
        <img className="img-fluid" src={slide.src} alt={slide.title} />
        <div className="slide-links">
            <div className="col link frtd">
                <a href={slide.link1.url}
                    target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-github bx-md bx-tada-hover' />
                </a>
                <span>{slide.link1.label}</span>
            </div>
            {slide.link2 &&
                <div className="col link project">
                    <a href={slide.link2.url}
                        target="_blank" rel="noopener noreferrer">
                        <i className={slide.link2.icon} style={{ fontSize: "1.6rem" }} />
                    </a>
                    <span>{slide.link2.label}</span>
                </div>
            }
            {slide.link3 &&
                <div className="col link bckd">
                    <a href={slide.link3.url}
                        target="_blank" rel="noopener noreferrer">
                        <i className={'bx bxl-github bx-md bx-tada-hover'} />
                    </a>
                    <span>{slide.link3.label}</span>
                </div>
            }
        </div>
        <div className="slide-title">
            <h6>{slide.title}<span>{slide.description}</span></h6>
        </div>
    </div>
));

export default Slides;
