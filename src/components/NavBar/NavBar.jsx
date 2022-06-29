import { useState } from "react";
import './NavBar.css';
import { Link } from 'react-scroll';
import ToggleBtn from "./ToggleBtn";


const NavBar = ({ isScrolling }) => {
    const [showLinks, setShowLinks] = useState(false)
    
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

    const logo = "https://res.cloudinary.com/chrod90/image/upload/v1656525814/chrod/logo-chrod-2_mt3x7e.png"

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
                    <img src={logo} alt="chrod-logo"/>
                    <i className="fa-solid fa-terminal fa-fade" />
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