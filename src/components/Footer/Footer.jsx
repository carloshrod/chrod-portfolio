import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
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
                            <a href="https://www.linkedin.com/in/carlos-hdz-r/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin linkedin" />
                            </a>
                            <a href="https://github.com/CarlosHdzR" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github github" />
                            </a>
                            <a href="https://www.instagram.com/carloshr90/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram instagram" />
                            </a>
                        </div>
                        <div className="text-center">
                            <h4>Designed by <b>Carlos Hernández R.</b></h4>
                        </div>
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

export default Footer