import React, { Component, Children, PropTypes } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.queryCache = Object.keys(props.breakpoints).map(key => {
      return {
        name: key,
        queryList: window.matchMedia(
          props.breakpoints[key].mediaQuery
        )
      };
    });

    const currentBreakpoint = this.queryCache.find(
      query => query.queryList.matches
    );

    if (currentBreakpoint && currentBreakpoint.name) {
      this.state = { breakpoint: currentBreakpoint.name };
    } else {
      this.state = { breakpoint: 'small'};
    }
  }

  componentDidMount() {
    for (const query of this.queryCache) {
      query.queryList.addListener(
        this.breakpointDidChange.bind(this)
      );
      this.breakpointDidChange.bind(this, query);
    }
  }

  componentWillUnmount() {
    for (const query of this.queryCache) {
      query.queryList.removeListener(this.breakpointDidChange);
    }
  }

  breakpointDidChange(mediaQuery) {
    if (mediaQuery.matches) {
      const matchingBreakpoint = this.queryCache.find(
        query => query.queryList.media === mediaQuery.media
      );

      if (matchingBreakpoint) {
        this.setState({
          breakpoint: matchingBreakpoint.name
        });
      }
    }
  }

  render() {
    const styles = {
      display: 'flex',
      flexDirection: 'row'
    };

    const childrenWithProps = Children.map(
      this.props.children, child => {
        return React.cloneElement(child, {
          breakpoint: this.state.breakpoint,
          breakpoints: this.props.breakpoints,
          defaultCells: this.props.defaultCells
        });
      }
    );

    return (
      <div style={styles}>
        {childrenWithProps}
      </div>
    );
  }
}

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
      mediaQuery: '(max-width: 640px)'
    },
    medium: {
      mediaQuery: '(min-width: 641px) and (max-width: 1024px)'
    },
    large: {
      mediaQuery: '(min-width: 1025px) and (max-width: 1440px)'
    },
    xlarge: {
      mediaQuery: '(min-width: 1441px)'
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
