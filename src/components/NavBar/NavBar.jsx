import { useContext, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import './NavBar.css';
import { Link } from 'react-scroll';
import ToggleBtn from "./ToggleBtn";
import ToggleLanguage from "./ToggleLanguage";

const NavBar = ({ isScrolling }) => {
    const { texts } = useContext(LanguageContext);
    const [showLinks, setShowLinks] = useState(false);

    const navItems = [
        {
            id: "1",
            label: texts.aboutLabel,
            to: "about",
        },
        {
            id: "2",
            label: texts.projectsLabel,
            to: "projects",
        },
        {
            id: "3",
            label: texts.contactLabel,
            to: "contact",
        }
    ]

    const logo = "https://res.cloudinary.com/chrod90/image/upload/v1656531147/chrod/logo-chrod-2_xocwhq.png"

    return (
        <nav className={`navbar navbar-expand ${isScrolling > 300 ? "scrolling" : null}`}>
            <div className="container-fluid">
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
                <ul className="navbar-nav active s-auto" id={showLinks ? "hidden" : ""}>
                    {navItems.map((item) => (
                        <li key={item.id} className="nav-item">
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
        </nav>
    )
}

export default NavBar;
