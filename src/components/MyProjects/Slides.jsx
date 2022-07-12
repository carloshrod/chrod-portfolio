import { slidesInfo } from "./slidesInfo";

const Slides = slidesInfo.map((slide, index) => (
    <div key={index} className="slide-container">
        <img className="img-fluid" src={slide.src} alt={slide.title} />
        <div className="slide-links">
            <div className="row col-8 col-sm-5 m-auto">
                <div className="col link frtd">
                    <a data-content={slide.link1.label} href={slide.link1.url}
                        target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github bx-md bx-tada-hover' />
                    </a>
                </div>
                <div className="col link project">
                    <a data-content={slide.link2.label} href={slide.link2.url}
                        target="_blank" rel="noopener noreferrer">
                        <i className={`bx bxl-${slide.link2.icon} bx-md bx-tada-hover`} />
                    </a>
                </div>
                {slide.link3 &&
                    <div className="col link bckd">
                        <a data-content={slide.link3.label} href={slide.link3.url}
                            target="_blank" rel="noopener noreferrer">
                            <i className={'bx bxl-github bx-md bx-tada-hover'} />
                        </a>
                    </div>
                }
            </div>
        </div>
        <div className="slide-title">
            <span>{slide.title}</span>
        </div>
    </div>
));

export default Slides;
