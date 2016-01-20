import React, { PropTypes } from 'react';
import Radium from 'radium';
import resolveCellStyles from './util/resolve-cell-styles';
import omit from 'lodash.omit';

const Cell = Radium(props => {
  const cellOverrides = omit(props, 'children');

  const styles = resolveCellStyles({
    breakpoints: props.breakpoints,
    cellOverrides: cellOverrides,
    gridDefaultCells: props.defaultCells,
    parentStyles: props.style
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

export default Cell;
