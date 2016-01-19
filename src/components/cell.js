import React, { PropTypes } from 'react';

const Cell = props => {
  const { width, alignment } = props;

  const cellSettings = {
    ...props.defaultCells,
    ...props.breakpoints[props.breakpoint].cells,
    ...{ width, alignment }
  };

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

  const styles = {
    display: 'flex',
    flexBasis: `${cellSettings.width * 100}%`,
    alignSelf: alignmentMap.vertical[cellSettings.alignment.vertical],
    justifyContent: alignmentMap.horizontal[cellSettings.alignment.horizontal],
    order: cellSettings.order
  };

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
};

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
