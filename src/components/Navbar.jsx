import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import navIcon from "../assets/navIcon.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleContactClick = (e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="navbar__logo" />
                </Link>

                <img
                    src={navIcon}
                    alt="Menu"
                    className="navbar__icon"
                    onClick={toggleMenu}
                />

                <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><Link className="navbar__link" to="/about">About</Link></li>
                    <li><Link className="navbar__link" to="/notableCases">Notable Cases</Link></li>
                    <li>
                        <a href="#contact-section" className="navbar__link" onClick={handleContactClick}>
                            Contact
                        </a>
                    </li>
                    <li><Link className="navbar__link" to="/payment">Payment</Link></li>
                </ul>
            </div>
        </nav>
    );
}
