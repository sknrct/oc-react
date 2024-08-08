import React from 'react';
import PropTypes from 'prop-types';
import { useCollapse } from 'react-collapsed';
import './collapse.scss';

const Collapse = ({ title, content }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="container_collapse">
      <button
        className={`collapsible ${isExpanded ? 'active' : ''}`}
        {...getToggleProps()}
      >
        {title}
        <span
          className={`fa-solid fa-chevron-up ${isExpanded ? 'active' : ''}`}
        ></span>
      </button>
      <div className={`content ${isExpanded ? 'active' : ''}`} {...getCollapseProps()}>
        <div className={`content_collapse ${isExpanded ? 'active' : ''}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
