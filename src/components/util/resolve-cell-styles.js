import merge from "lodash.merge";

const PERCENTAGE = 100;

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

  const gridDefault = {
    width: props.cellWidth,
    horizontalAlign: props.cellAlign,
    verticalAlign: props.cellVerticalAlign
  };

  const cellDefault = {
    width: props.width,
    horizontalAlign: props.align,
    verticalAlign: props.verticalAlign,
    order: props.order
  };

  const breakpoints = ["small", "medium", "large", "xlarge"].map((size) => {
    return {
      mediaQuery: props.breakpoints[size],
      gridBreakpointDefault: {
        width: props[`${size}CellWidth`],
        horizontalAlign: props[`${size}CellAlign`],
        verticalAlign: props[`${size}CellVerticalAlign`]
      },
      cellBreakpointDefault: {
        width: props[`${size}Width`],
        horizontalAlign: props[`${size}Align`],
        verticalAlign: props[`${size}VerticalAlign`]
      }
    };
  });

  return Object.keys(breakpoints).reduce((acc, breakpoint) => {
    // Extract the media query and the breakpoint cell configs
    const {
      mediaQuery,
      gridBreakpointDefault,
      cellBreakpointDefault
    } = breakpoints[breakpoint];

    // Determine the final cell configuration.
    // Uses these sources for cell styles, in order of precedence:
    // - Grid default
    // - Grid breakpoint default
    // - Cell default
    // - Cell breakpoint default
    const cellConfig = merge({},
      gridDefault,
      gridBreakpointDefault,
      cellDefault,
      cellBreakpointDefault
    );

    return {
      ...acc,
      [mediaQuery]: {
        flexBasis: `calc(${cellConfig.width * PERCENTAGE}% - ${props.gutter})`,
        alignSelf: alignmentMap.vertical[
          cellConfig.verticalAlign
        ],
        justifyContent: alignmentMap.horizontal[
          cellConfig.horizontalAlign
        ],
        order: cellConfig.order ? cellConfig.order : "initial"
      }
    };
  }, {
    display: "flex",
    ...props.style
  });
};

export default resolveCellStyles;
