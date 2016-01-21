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

  it('should be a flex container', () => {
    const result = resolveCellStyles(Grid.defaultProps);

    expect(result).to.not.be.empty;
    expect(result.display).to.equal('flex');
  });

  it('should map grid breakpoints to Radium media queries', () => {
    let result = resolveCellStyles(Grid.defaultProps);

    let mediaQueries = extractMediaQueries(result);
    let expectedMediaQueries = Object.keys(
      Grid.defaultProps.breakpoints
    ).map(key => Grid.defaultProps.breakpoints[key]);

    expect(
      JSON.stringify(mediaQueries)
    ).to.equal(
      JSON.stringify(expectedMediaQueries)
    );
  });

  it('should resolve styles to sensible defaults when no props are specified', () => {
    const result = resolveCellStyles(Grid.defaultProps);

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.alignSelf).to.equal('flex-start');
      expect(style.justifyContent).to.equal('flex-start');
      expect(style.order).to.equal('initial');
      expect(style.flexBasis).to.have.string('33.333');
    }
  });

  it('should resolve styles when only grid props are specified', () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: 'right',
      cellVerticalAlign: 'bottom'
    });

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.alignSelf).to.equal('flex-end');
      expect(style.justifyContent).to.equal('flex-end');
      expect(style.order).to.equal('initial');
      expect(style.flexBasis).to.have.string('25');
    }
  });

  it('should resolve styles when grid props and grid breakpoint props are specified', () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: 'right',
      cellVerticalAlign: 'bottom',
      smallCellWidth: 1,
      smallCellAlign: 'center',
      smallCellVerticalAlign: 'center'
    });

    expect(result).to.not.be.empty;

    const smallStyle = result[Grid.defaultProps.breakpoints.small];

    expect(smallStyle.alignSelf).to.equal('center');
    expect(smallStyle.justifyContent).to.equal('center');
    expect(smallStyle.order).to.equal('initial');
    expect(smallStyle.flexBasis).to.equal('100%');
  });
});
