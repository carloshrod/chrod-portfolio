import { Link } from 'react-scroll';
import { useLanguageContext } from '../hooks';

const Footer = () => {
    const { texts } = useLanguageContext();

    return (
        <footer className="footer">
            <div className="container">
                <div className="row mb-4">
                    <div className="footer-col">
                        <div className="back-to-top">
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
                        </div>
                        <div className="social-links">
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
                        {texts.footerLabel} <b>Carlos Hernández R.</b>
                    </div>
                </div>
                <div className="copyrights row">
                    <hr />
                    <p>
                        &copy;{new Date().getFullYear()} <span>Chrod</span> &nbsp;|&nbsp; All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
