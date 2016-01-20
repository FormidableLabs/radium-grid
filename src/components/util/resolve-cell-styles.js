const resolveCellStyles = ({
  breakpoints, cellOverrides, gridDefaultCells, parentStyles
}) => {
  // Translate grid-speak to flexbox-speak
  const alignmentMap = {
    horizontal: {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end'
    },
    vertical: {
      top: 'flex-start',
      center: 'center',
      bottom: 'flex-end'
    }
  };

  return Object.keys(breakpoints).reduce((acc, breakpoint) => {
    // Extract the media query and the breakpoint's specific cell config
    const breakpointMap = breakpoints[breakpoint];
    const { mediaQuery, cells: breakpointDefaultCells } = breakpointMap;

    // Determine the final cell configuration.
    // In order of precedence:
    // - this cell's width and alignment props
    // - the breakpoint's cell defaults
    // - the grid's cell defaults
    const cellConfig = {
      ...gridDefaultCells,
      ...breakpointDefaultCells,
      ...cellOverrides
    };

    return {
      ...acc,
      [mediaQuery]: {
        flexBasis: `${cellConfig.width * 100}%`,
        alignSelf: alignmentMap.vertical[
          cellConfig.alignment.vertical
        ],
        justifyContent: alignmentMap.horizontal[
          cellConfig.alignment.horizontal
        ],
        order: cellConfig.order ? cellConfig.order : 'initial'
      }
    };
  }, {
    ...parentStyles,
    display: 'flex'
  });
};

export default resolveCellStyles;
