// Help PhantomJS out
require('babel-polyfill');

import { Grid, Cell } from '../../../../src/index';
import resolveCellStyles from '../../../../src/components/util/resolve-cell-styles';

describe('components/grid', () => {
  const extractMediaQueries = result => {
    return Object.keys(result).filter(
      key => !key.search(/@media/g)
    );
  };

  const extractBreakpointStyles = result => {
    return extractMediaQueries(result)
      .map(key => result[key]);
  };

  it('should inherit parent style props', () => {
    const result = resolveCellStyles({
      breakpoints: Grid.defaultProps.breakpoints,
      cellOverrides: Cell.defaultProps,
      gridDefaultCells: Grid.defaultProps.defaultCells,
      parentStyles: {
        display: 'flex',
        flexDirection: 'row'
      }
    });

    expect(result.display).to.equal('flex');
    expect(result.flexDirection).to.equal('row');
  });

  it('should map grid breakpoints to Radium media queries', () => {
    const result = resolveCellStyles({
      breakpoints: Grid.defaultProps.breakpoints,
      cellOverrides: Cell.defaultProps,
      gridDefaultCells: Grid.defaultProps.defaultCells,
      parentStyles: {
        display: 'flex',
        flexDirection: 'row'
      }
    });

    const mediaQueries = extractMediaQueries(result);
    const expectedMediaQueries = Object.keys(
      Grid.defaultProps.breakpoints
    ).map(key => Grid.defaultProps.breakpoints[key].mediaQuery);

    expect(
      JSON.stringify(mediaQueries)
    ).to.equal(
      JSON.stringify(expectedMediaQueries)
    );
  });

  it('should resolve styles to sensible defaults when no props are specified', () => {
    const result = resolveCellStyles({
      breakpoints: Grid.defaultProps.breakpoints,
      cellOverrides: Cell.defaultProps,
      gridDefaultCells: Grid.defaultProps.defaultCells,
      parentStyles: {
        display: 'flex',
        flexDirection: 'row'
      }
    });

    for (const style of extractBreakpointStyles(result)) {
      expect(style.alignSelf).to.equal('flex-start');
      expect(style.justifyContent).to.equal('flex-start');
      expect(style.order).to.equal('initial');
      expect(style.flexBasis).to.have.string('33.333');
    }
  });

  it('should resolve styles when only grid props are specified', () => {
    const result = resolveCellStyles({
      breakpoints: Grid.defaultProps.breakpoints,
      cellOverrides: Cell.defaultProps,
      gridDefaultCells: {
        width: 1 / 4,
        alignment: {
          horizontal: 'right',
          vertical: 'center'
        }
      },
      parentStyles: {
        display: 'flex',
        flexDirection: 'row'
      }
    });

    for (const style of extractBreakpointStyles(result)) {
      expect(style.alignSelf).to.equal('center');
      expect(style.justifyContent).to.equal('flex-end');
      expect(style.order).to.equal('initial');
      expect(style.flexBasis).to.have.string('25');
    }
  });
});
