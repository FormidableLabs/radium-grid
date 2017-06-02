/* eslint-disable new-cap */
import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import resolveCells from "./util/resolve-cells";

const Grid = (props) => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minWidth: "100%",
    ...props.style
  };

  return (
    <div style={styles}>
      {resolveCells(props)}
    </div>
  );
};

Grid.propTypes = {
  cellWidth: PropTypes.string,
  cellAlign: PropTypes.string,
  cellVerticalAlign: PropTypes.string,

  smallCellWidth: PropTypes.string,
  smallCellAlign: PropTypes.string,
  smallCellVerticalAlign: PropTypes.string,

  mediumCellWidth: PropTypes.string,
  mediumCellAlign: PropTypes.string,
  mediumCellVerticalAlign: PropTypes.string,

  largeCellWidth: PropTypes.string,
  largeCellAlign: PropTypes.string,
  largeCellVerticalAlign: PropTypes.string,

  xlargeCellWidth: PropTypes.string,
  xlargeCellAlign: PropTypes.string,
  xlargeCellVerticalAlign: PropTypes.string,

  breakpoints: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    xlarge: PropTypes.string
  }),

  gutter: PropTypes.string,

  style: PropTypes.object,
  children: PropTypes.node
};

Grid.defaultProps = {
  cellWidth: "1/3",
  cellAlign: "left",
  cellVerticalAlign: "top",

  breakpoints: {
    small: "@media only screen and (max-width: 640px)",
    medium: "@media only screen and (min-width: 641px) and (max-width: 1024px)",
    large: "@media only screen and (min-width: 1025px) and (max-width: 1440px)",
    xlarge: "@media only screen and (min-width: 1441px)"
  },

  gutter: "16px"
};

export default Radium(Grid);
