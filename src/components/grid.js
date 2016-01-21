import React, { Children, PropTypes } from 'react';
import Radium from 'radium';
import omit from 'lodash.omit';

const Grid = Radium(props => {
  const styles = {
    ...props.style,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  };

  const childProps = omit(props, ['children', 'style']);
  const childrenWithProps = Children.map(
    props.children, child => {
      return React.cloneElement(child, childProps);
    }
  );

  return (
    <div style={styles}>
      {childrenWithProps}
    </div>
  );
});

Grid.propTypes = {
  cellWidth: PropTypes.number,
  cellAlign: PropTypes.string,
  cellVerticalAlign: PropTypes.string,

  smallCellWidth: PropTypes.number,
  smallCellAlign: PropTypes.string,
  smallCellVerticalAlign: PropTypes.string,

  mediumCellWidth: PropTypes.number,
  mediumCellAlign: PropTypes.string,
  mediumCellVerticalAlign: PropTypes.string,

  largeCellWidth: PropTypes.number,
  largeCellAlign: PropTypes.string,
  largeCellVerticalAlign: PropTypes.string,

  xlargeCellWidth: PropTypes.number,
  xlargeCellAlign: PropTypes.string,
  xlargeCellVerticalAlign: PropTypes.string,

  breakpoints: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    xlarge: PropTypes.string
  }),

  gutter: PropTypes.string
};

Grid.defaultProps = {
  cellWidth: 1 / 3,
  cellAlign: 'left',
  cellVerticalAlign: 'top',

  breakpoints: {
    small: '@media only screen and (max-width: 640px)',
    medium: '@media only screen and (min-width: 641px) and (max-width: 1024px)',
    large: '@media only screen and (min-width: 1025px) and (max-width: 1440px)',
    xlarge: '@media only screen and (min-width: 1441px)'
  },

  gutter: '24px'
};

export default Grid;
