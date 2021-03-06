import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <div className="container">
                <div className="row mb-4">
                    <div className="footer-col">
                        <div className="text-center">
                            <span className="back-to-top">
                                <Link
                                    className="mb-4"
                                    to={"hero"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={200}
                                >
                                    <i className="fa-solid fa-angle-up fa-bounce" />
                                </Link>
                            </span>
                        </div>
                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/chrod/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin linkedin" />
                            </a>
                            <a href="https://github.com/carloshrod" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github github" />
                            </a>
                            <a href="https://www.instagram.com/carloshr90/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="design-by">
                        {texts.footerLabel} <b>Carlos Hern??ndez R.</b>
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <p style={{ fontSize: 10 }}>
                        &copy;{new Date().getFullYear()} <b>Chrod</b> &nbsp;|&nbsp; All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
