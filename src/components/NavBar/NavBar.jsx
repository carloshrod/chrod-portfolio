import './NavBar.css';
import { Link } from 'react-scroll';

const navItems = [
    {
        id: "1",
        label: "About",
        to: "about",
        offSet: -80
    },
    {
        id: "2",
        label: "Projects",
        to: "projects",
        offSet: 0
    },
    {
        id: "3",
        label: "Contact",
        to: "contact",
        offSet: -80
    }
]

const NavBar = ({ isScrolling }) => {
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
                    CarlosHRod <i className="fa-solid fa-terminal fa-fade"/>
                </Link>
                <ul className="navbar-nav active">
                    {navItems.map((item) => (
                        <li key={item.id} className="nav-item">
                            <Link
                                className="nav-link"
                                to={item.to} spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar