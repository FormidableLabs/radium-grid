/* eslint-disable new-cap */
import React, { Children } from "react";

import initial from "lodash.initial";
import last from "lodash.last";
import parseFraction from "./parse-fraction";

const resolveColumnCounts = ({ children, breakpoints }) => {
  // Create an array of column counts that matches
  // the indices of the cell array. This way, each
  // cell knows about how many columns its parent
  // row contains and therefore can calculate
  // gutters correctly.

  // The data pipeline looks like this:
  // [[CellProps, CellProps], [CellProps, CellProps, CellProps]] ->
  // [[2, 2], [3, 3, 3]] ->
  // [2, 2, 3, 3, 3]

  // The indices of the final array align with the
  // indices of the child cell array.
  const columnCounts = Object.keys(breakpoints)
    .reduce((all, breakpoint) => {
      const mediaQuery = breakpoints[breakpoint];
      return {
        ...all,
        [mediaQuery]: children.reduce((acc, cell) => {
          const breakpointCell = cell.props[mediaQuery];

          // On the first fold, add a new subarray
          // with the first cell props.
          if (!acc.length) {
            return [[breakpointCell]];
          }

          const rest = initial(acc);
          const row = last(acc);

          // If the sum of the current and previous
          // cells is gte 1, leave the current
          // subarray and start a new one with
          // the current cell
          const sum = row
            .map((column) => parseFraction(column.width))
            .reduce((previous, width) => previous + width);
          if (sum >= 1) {
            return [...acc, [breakpointCell]];
          }

          return [...rest, [...row, breakpointCell]];
        }, [])
        .map((row) => row.map(() => row.length))
        .reduce((acc, row) => acc.concat(row))
      };
    }, {});

  // Add the column counts to the cell props.
  return Children.map(children, (cell, index) => {
    const propsWithColumnCounts = Object.keys(columnCounts)
      .reduce((acc, breakpoint) => {
        const columnCount = columnCounts[breakpoint][index];
        const cellProps = cell.props[breakpoint];
        return {
          ...acc,
          [breakpoint]: {...cellProps, columnCount}
        };
      }, {});
    return React.cloneElement(cell, propsWithColumnCounts);
  });
};

export default resolveColumnCounts;
