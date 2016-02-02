/* eslint-disable no-magic-numbers */
import merge from "lodash.merge";
import { mergeStyles } from "radium/lib/merge-styles";
import parseFraction from "./parse-fraction";

const parseUnit = (value) => {
  // http://stackoverflow.com/questions/2868947/split1px-into-1px-1-px-in-javascript
  const matches = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const [, number, unit] = matches;
  return { number, unit };
};

const resolveCellGutter = ({ gutter, columnCount }) => {
  const { number, unit } = parseUnit(gutter);
  return `${(number - (number / columnCount))}${unit}`;
};

const resolveCellFlexBasis = ({ width, gutter, columnCount }) => {
  const MULTIPLIER = 100;

  // Full-width cells have no gutter
  if (width === 1) {
    return "100%";
  }

  const finalGutter = resolveCellGutter({ gutter, columnCount });

  return `calc(${width * MULTIPLIER}% - ${finalGutter})`;
};

// Merge Radium style arrays and leave
// normal style objects untouched
const resolvePropStyles = (styles) => {
  if (styles && Array.isArray(styles)) {
    return mergeStyles(styles);
  }
  return styles ? styles : {};
};

const resolveCellStyles = (props) => {
  // Translate grid-speak to flexbox-speak
  const alignmentMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    top: "flex-start",
    middle: "center",
    bottom: "flex-end"
  };

  const mediaQueries = Object.keys(props)
    .filter((key) => key.indexOf("@media") !== -1);

  const cellStyle = mediaQueries.reduce((acc, mediaQuery) => {
    const breakpointStyles = props[mediaQuery];

    return {
      ...acc,
      [mediaQuery]: {
        display: "flex",
        flexBasis: resolveCellFlexBasis({
          width: parseFraction(breakpointStyles.width),
          gutter: breakpointStyles.gutter,
          columnCount: breakpointStyles.columnCount
        }),
        alignItems: alignmentMap[breakpointStyles.verticalAlign],
        justifyContent: alignmentMap[breakpointStyles.horizontalAlign],
        order: breakpointStyles.order ? breakpointStyles.order : "initial"
      }
    };
  }, {});

  // Deep merge here so that custom media query
  // styles don't get obliterated by the defaults
  return merge(
    cellStyle,
    resolvePropStyles(props.style)
  );
};

export default resolveCellStyles;
