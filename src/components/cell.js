/* eslint-disable new-cap */
import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";

const Cell = (props) => {
  return (
    <div style={props.style}>
      {props.children}
    </div>
  );
};

const horizontalPropType = PropTypes.oneOf(["left", "center", "right"]);
const verticalPropType = PropTypes.oneOf(["top", "middle", "bottom"]);
Cell.propTypes = {
  width: PropTypes.string,
  horizontalAlign: horizontalPropType,
  verticalAlign: verticalPropType,
  order: PropTypes.number,

  smallWidth: PropTypes.string,
  smallHorizontalAlign: horizontalPropType,
  smallVerticalAlign: verticalPropType,
  smallOrder: PropTypes.number,

  mediumWidth: PropTypes.string,
  mediumHorizontalAlign: horizontalPropType,
  mediumVerticalAlign: verticalPropType,
  mediumOrder: PropTypes.number,

  largeWidth: PropTypes.string,
  largeHorizontalAlign: horizontalPropType,
  largeVerticalAlign: verticalPropType,
  largeOrder: PropTypes.number,

  xlargeWidth: PropTypes.string,
  xlargeHorizontalAlign: horizontalPropType,
  xlargeVerticalAlign: verticalPropType,
  xlargeOrder: PropTypes.number,

  children: PropTypes.node,
  style: PropTypes.object
};

export default Radium(Cell);
