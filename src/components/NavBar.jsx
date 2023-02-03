import { useState } from "react";
import { Link } from 'react-scroll';
import { useLanguageContext } from "../hooks";
import ToggleBtn from "./ToggleBtn";
import ToggleLanguage from "./ToggleLanguage";
import logo from '../assets/media/chrod-logo.png';
import { motion } from "framer-motion";

const NavBar = ({ isScrolling }) => {
    const { texts } = useLanguageContext();
    const [showLinks, setShowLinks] = useState(false);

    const navItems = [
        {
            label: texts.aboutLabel,
            to: "about",
        },
        {
            label: texts.projectsLabel,
            to: "projects",
        },
        {
            label: texts.contactLabel,
            to: "contact",
        }
    ]


    return (
        <motion.nav
            className={`navbar navbar-expand ${isScrolling > 300 ? "scrolling" : null}`}
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ type: "spring", stiffness: 150 }}
        >
            <div
                className="container-fluid"
            >
                <Link
                    className="navbar-brand"
                    to={"hero"}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                >
                    <img src={logo} alt="chrod-logo" />
                    <i className="fa-solid fa-terminal fa-fade" />
                </Link>
                <ul className="navbar-nav s-auto" id={showLinks ? "hidden" : ""}>
                    {navItems.map((item, i) => (
                        <li key={i} className="nav-item">
                            <Link
                                className="nav-link"
                                to={item.to} spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                                onClick={() => setShowLinks(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ToggleLanguage />
                <ToggleBtn showLinks={showLinks} setShowLinks={setShowLinks} />
            </div>
        </motion.nav>
    )
}

export default NavBar;
