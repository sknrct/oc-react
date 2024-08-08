import "./footer.scss";
import logoFooter from "../../assets/logo-footer.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <img src={logoFooter} alt="Logo de la marque Kasa en typo blanche" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
