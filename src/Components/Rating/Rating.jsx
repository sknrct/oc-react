import "./rating.scss";
import PropTypes from "prop-types";

const Rating = ({ rating }) => (
    <div className="rating">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <span key={i} className="fas fa-star" style={{ color: ratingValue <= rating ? "#ff6060" : "#e3e3e3"}}></span>
            )
        })}
    </div>
)

Rating.propTypes = {
    rating: PropTypes.number,
}

export default Rating;