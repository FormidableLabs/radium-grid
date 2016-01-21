import React, { PropTypes } from 'react';
import Radium from 'radium';
import resolveCellStyles from './util/resolve-cell-styles';
import omit from 'lodash.omit';

const Cell = Radium(props => {
  const styles = resolveCellStyles(props);
  console.log(styles);

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
});

const horizontalPropType = PropTypes.oneOf(['left', 'center', 'right']);
const verticalPropType = PropTypes.oneOf(['top', 'middle', 'bottom']);
Cell.propTypes = {
  width: PropTypes.number,
  horizontalAlign: verticalPropType,
  verticalAlign: horizontalPropType,

  smallWidth: PropTypes.number,
  smallHorizontalAlign: verticalPropType,
  smallVerticalAlign: horizontalPropType,

  mediumWidth: PropTypes.number,
  mediumHorizontalAlign: verticalPropType,
  mediumVerticalAlign: horizontalPropType,

  largeWidth: PropTypes.number,
  largeHorizontalAlign: verticalPropType,
  largeVerticalAlign: horizontalPropType,

  xlargeWidth: PropTypes.number,
  xlargeHorizontalAlign: verticalPropType,
  xlargeVerticalAlign: horizontalPropType,

  order: PropTypes.number,
  children: React.PropTypes.node
};

export default Cell;
