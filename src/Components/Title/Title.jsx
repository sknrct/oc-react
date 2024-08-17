import PropTypes from "prop-types";
import "./title.scss"; 

const TitleSection = ({ title, location}) => (
  <div className="titles">
    <h1>{title}</h1>
    <p>{location}</p>
  </div>
);

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired, 
};

export default TitleSection;
