import React, { Children, PropTypes } from 'react';
import Radium from 'radium';

const Grid = Radium(props => {
  const styles = {
    ...props.style,
    display: 'flex',
    flexDirection: 'row'
  };

  const childrenWithProps = Children.map(
    props.children, child => {
      return React.cloneElement(child, {
        breakpoints: props.breakpoints,
        defaultCells: props.defaultCells
      });
    }
  );

  return (
    <div style={styles}>
      {childrenWithProps}
    </div>
  );
});

const cellShape = PropTypes.shape({
  width: PropTypes.number,
  alignment: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'middle', 'bottom'])
  })
});

const breakpointShape = PropTypes.shape({
  mediaQuery: PropTypes.string,
  cells: cellShape
});

Grid.propTypes = {
  breakpoints: PropTypes.shape({
    small: breakpointShape,
    medium: breakpointShape,
    large: breakpointShape,
    xlarge: breakpointShape
  }),
  defaultCells: cellShape,
  gutter: PropTypes.number
};

Grid.defaultProps = {
  breakpoints: {
    small: {
      mediaQuery: '@media only screen and (max-width: 640px)'
    },
    medium: {
      mediaQuery: '@media only screen and (min-width: 641px) and (max-width: 1024px)'
    },
    large: {
      mediaQuery: '@media only screen and (min-width: 1025px) and (max-width: 1440px)'
    },
    xlarge: {
      mediaQuery: '@media only screen and (min-width: 1441px)'
    }
  },
  defaultCells: {
    width: 1 / 3,
    alignment: {
      horizontal: 'left',
      vertical: 'top'
    }
  },
  gutter: 24
};

export default Grid;
