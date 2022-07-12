import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import './About.css';

const About = () => {
    const { texts } = useContext(LanguageContext)

    const icons = [
        { fa: "fa-brands fa-js-square fa-bounce" },
        { fa: "fa-brands fa-html5 fa-flip" },
        { fa: "fa-brands fa-css3 fa-shake" },
        { fa: "fa-brands fa-react fa-spin" },
        { fa: "fa-brands fa-node fa-beat" },
        { fa: "fa-brands fa-git fa-fade" }
    ]

    return (
        <div className="about-container" id="about">
            <div className="about-desc">
                <h2>{texts.aboutLabel}</h2>
                <p>
                    <i className="fa-solid fa-hand fa-shake me-1" />
                    {texts.aboutDesc}
                </p>
                <button className="download-button">
                    <div className="docs">
                        <i className="fa-solid fa-file" />
                        {texts.aboutBtnLabel}
                    </div>
                    <a href="./resume" target="_blank">
                        <div className="download">
                            <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line y2="3" x2="12" y1="15" x1="12" />
                            </svg>
                        </div>
                    </a>
                </button>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="about-icons-card row col-8 text-center">
                    {icons.map((icon, index) => (
                        <div key={index} className="col">
                            <i className={icon.fa} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About