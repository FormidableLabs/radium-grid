import React, { PropTypes } from 'react';
import Radium from 'radium';

const Cell = Radium(props => {
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

  const { width, alignment } = props;

  // Generate the style object. Each breakpoint
  // uses its media query as its key and
  // breakpoint-specific styles as its values.
  // Radium handles the actual breakpoint transitions.
  const styles = Object.keys(
    props.breakpoints
  ).reduce((acc, breakpoint) => {
    // Extract the media query and the breakpoint's specific cell config
    const breakpointSettings = props.breakpoints[breakpoint];
    const { mediaQuery, cells: breakpointDefaultCells } = breakpointSettings;

    // Determine the final cell configuration.
    // In order of precedence:
    // - this cell's width and alignment props
    // - the breakpoint's cell defaults
    // - the grid's cell defaults
    const cellConfig = {
      ...props.defaultCells,
      ...breakpointDefaultCells,
      ...{ width, alignment }
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
        order: cellConfig.order
      }
    };
  }, {
    ...props.style,
    display: 'flex'
  });

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
});

Cell.propTypes = {
  alignment: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'middle', 'bottom'])
  }),
  children: React.PropTypes.node,
  order: PropTypes.number,
  width: PropTypes.number
};

Cell.defaultProps = {
  alignment: {
    horizontal: 'left',
    vertical: 'top'
  },
  width: 1 / 3
};

export default Cell;
