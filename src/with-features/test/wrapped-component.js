import React from "react";
import PropTypes from "prop-types";

const WrappedComponent = (props, context) => (
  <div>
    <div className="context-features-string">{context.features.toString()}</div>
    <div className="props-features-string">{props.features.toString()}</div>
    <div className="props-name">{props.name}</div>
  </div>
);

WrappedComponent.contextTypes = { features: PropTypes.array };

export default WrappedComponent;
