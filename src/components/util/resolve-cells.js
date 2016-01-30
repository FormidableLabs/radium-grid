import React, { Children } from "react";
import omit from "lodash.omit";
import merge from "lodash.merge";
import resolveCellDefaults from "./resolve-cell-defaults";
import resolveColumnCounts from "./resolve-column-counts";
import resolveCellStyles from "./resolve-cell-styles";

const resolveCells = (props) => {
  // Resolve the final style defaults for each cell
  const childProps = omit(props, ["children", "style"]);
  const childrenWithDefaults = Children.map(
    props.children, (child) => {
      return React.cloneElement(
        child, resolveCellDefaults(
          merge({}, childProps, child.props)
        )
      );
    }
  );

  // Add column counts to each cell's props
  const childrenWithColumnCounts = resolveColumnCounts({
    children: childrenWithDefaults,
    breakpoints: props.breakpoints
  });

  // Resolve the final cell styles
  return Children.map(childrenWithColumnCounts, (child) => {
    return React.cloneElement(child, {
      style: resolveCellStyles(child.props)
    });
  });
};

export default resolveCells;
