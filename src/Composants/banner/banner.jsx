import PropTypes from "prop-types";
import "./banner.scss";

const Banner = ({ imageUrl, title, opacity, isVisible }) => {
    const overlayStyle = {
        opacity: opacity,
    }

    return (
        <div className="banner">
            <div className="banner-overlay" style={overlayStyle}></div>
            <img src="{imageUrl}" alt="Banner" className="banner-image" />
            {isVisible && <h1 className="banner-title">{title}</h1>}
        </div>
    )
}

Banner.propTypes = {
    imageUrl: PropTypes.node.isRequired,
    title: PropTypes.node,
    opacity: PropTypes.number,
    isVisible: PropTypes.bool.isRequired,
}

export default Banner;