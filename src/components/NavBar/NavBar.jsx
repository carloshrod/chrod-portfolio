import { useState } from "react";
import './NavBar.css';
import { Link } from 'react-scroll';
import ToggleBtn from "./ToggleBtn";

const navItems = [
    {
        id: "1",
        label: "About",
        to: "about",
    },
    {
        id: "2",
        label: "Projects",
        to: "projects",
    },
    {
        id: "3",
        label: "Contact",
        to: "contact",
    }
]

const NavBar = ({ isScrolling }) => {
    const [showLinks, setShowLinks] = useState(false)

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
                    CarlosHRod <i className="fa-solid fa-terminal fa-fade" />
                </Link>
                <ul className="navbar-nav active" id={showLinks ? "hidden" : ""}>
                    {navItems.map((item) => (
                        <li key={item.id} className="nav-item">
                            <Link
                                className="nav-link"
                                to={item.to} spy={true}
                                smooth={true}
                                offset={-75}
                                duration={200}
                                onClick={() => setShowLinks(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ToggleBtn showLinks={showLinks} setShowLinks={setShowLinks} />
            </div>
        </nav>
    )
}

export default NavBar