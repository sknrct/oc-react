import PropTypes from 'prop-types';
import "./tags.scss";

const Tags = ({ tags }) => (
  <div className="tags">
    {tags && tags.length > 0 ? (
      tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))
    ) : (
      <p>No tags available</p>
    )}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Tags;