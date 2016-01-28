import merge from "lodash.merge";

const resolveCellDefaults = (props) => {
  const gridDefault = {
    width: props.cellWidth,
    horizontalAlign: props.cellAlign,
    verticalAlign: props.cellVerticalAlign,
    gutter: props.gutter
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

  return breakpoints.reduce((acc, breakpoint) => {
    // Extract the media query and the breakpoint cell configs
    const {
      mediaQuery,
      gridBreakpointDefault,
      cellBreakpointDefault
    } = breakpoint;

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

    return {...acc, [mediaQuery]: cellConfig};
  }, {});
};

export default resolveCellDefaults;
