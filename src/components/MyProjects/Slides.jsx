<script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>

const slidesInfo = [
    {
        src: "https://res.cloudinary.com/chrod90/image/upload/v1656537056/project-captures/screenshot-predial_svdx1i.jpg",
        title: "Plataforma de Gestión Catastral",
        frtdUrl: "https://github.com/CarlosHdzR/predial-frontend",
        projectUrl: "https://gestion-catastral.netlify.app/",
        bckdUrl: "https://github.com/CarlosHdzR/predial-backend"
    },
    {
        src: "https://res.cloudinary.com/chrod90/image/upload/v1656537075/project-captures/screenshot-portfolio_csfadt.jpg",
        title: "My Portfolio",
        frtdUrl: "https://github.com/CarlosHdzR/chrod-portfolio",
        projectUrl: "https://chrod-portfolio.netlify.app/",
    },
];

const slides = slidesInfo.map((slide, index) => (
    <div key={index} className="slide-container">
        <img className="img-fluid" src={slide.src} alt={slide.title} />
        <div className="slide-links">
            <div className="row col-8 col-sm-5 m-auto">
                <div className="col link frtd">
                    <a className="icon-link" data-content="Frontend" href={slide.frtdUrl} target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github bx-md bx-tada-hover' />
                    </a>
                </div>
                <div className="col link project">
                    <a data-content="Project" href={slide.projectUrl} target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-netlify bx-md bx-tada-hover' />
                    </a>
                </div>
                {slide.bckdUrl &&
                    <div className="col link bckd">
                        <a data-content="Backend" href={slide.bckdUrl} target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-github bx-md bx-tada-hover' />
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

export default slides;
