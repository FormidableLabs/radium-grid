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
  horizontalAlign: horizontalPropType,
  verticalAlign: verticalPropType,

  smallWidth: PropTypes.number,
  smallHorizontalAlign: horizontalPropType,
  smallVerticalAlign: verticalPropType,

  mediumWidth: PropTypes.number,
  mediumHorizontalAlign: horizontalPropType,
  mediumVerticalAlign: verticalPropType,

  largeWidth: PropTypes.number,
  largeHorizontalAlign: horizontalPropType,
  largeVerticalAlign: verticalPropType,

  xlargeWidth: PropTypes.number,
  xlargeHorizontalAlign: horizontalPropType,
  xlargeVerticalAlign: verticalPropType,

  order: PropTypes.number,
  children: React.PropTypes.node
};

export default Cell;
