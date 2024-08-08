import { NavLink } from "react-router-dom";
import "./header.scss";
// Poser la question des chemins
import logoKasa from "../../assets/logo.png";

const Header = () => {
    return (
        <header>
        <nav className="navbar">
            <NavLink to="/" className="img_link">
                <img src={logoKasa} alt="Logo de la marque Kasa" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;