import "./error.scss";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="error_container">
            <h1 className="error_title">404</h1>
            <p className="error_text">
                Oups ! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error_link">
                Retourner sur la page d'accueil
            </Link>
        </section>
    )
}

export default Error;
