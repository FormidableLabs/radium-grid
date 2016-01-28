/* eslint-disable no-magic-numbers */
import { mergeStyles } from "radium/lib/merge-styles";
import Fraction from "fraction.js";

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
  if (width.d === 1) {
    return "100%";
  }

  const finalGutter = resolveCellGutter({ gutter, columnCount });

  return `calc(${width.valueOf() * MULTIPLIER}% - ${finalGutter})`;
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
    horizontal: {
      left: "flex-start",
      center: "center",
      right: "flex-end"
    },
    vertical: {
      top: "flex-start",
      middle: "center",
      bottom: "flex-end"
    }
  };

  const mediaQueries = Object.keys(props)
    .filter((key) => key.indexOf("@media") !== -1);

  return mediaQueries.reduce((acc, mediaQuery) => {
    const breakpointStyles = props[mediaQuery];

    return {
      ...acc,
      [mediaQuery]: {
        flexBasis: resolveCellFlexBasis({
          width: new Fraction(breakpointStyles.width),
          gutter: breakpointStyles.gutter,
          columnCount: breakpointStyles.columnCount
        }),
        alignSelf: alignmentMap.vertical[
          breakpointStyles.verticalAlign
        ],
        justifyContent: alignmentMap.horizontal[
          breakpointStyles.horizontalAlign
        ],
        order: breakpointStyles.order ? breakpointStyles.order : "initial",
        height: "150px"
      }
    };
  }, { ...resolvePropStyles(props.style) });
};

export default resolveCellStyles;
