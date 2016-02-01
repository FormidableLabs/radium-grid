/* eslint-disable new-cap */
import React, { PropTypes } from "react";
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

  smallWidth: PropTypes.string,
  smallHorizontalAlign: horizontalPropType,
  smallVerticalAlign: verticalPropType,

  mediumWidth: PropTypes.string,
  mediumHorizontalAlign: horizontalPropType,
  mediumVerticalAlign: verticalPropType,

  largeWidth: PropTypes.string,
  largeHorizontalAlign: horizontalPropType,
  largeVerticalAlign: verticalPropType,

  xlargeWidth: PropTypes.string,
  xlargeHorizontalAlign: horizontalPropType,
  xlargeVerticalAlign: verticalPropType,

  order: PropTypes.number,

  children: PropTypes.node,
  style: PropTypes.object
};

export default Radium(Cell);
