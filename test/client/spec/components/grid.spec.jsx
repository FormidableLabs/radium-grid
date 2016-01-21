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

  it(`should resolve styles when these are specified:
        1) grid props
        2) grid breakpoint props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: 'right',
      cellVerticalAlign: 'bottom',
      smallCellWidth: 1,
      smallCellAlign: 'center',
      smallCellVerticalAlign: 'middle'
    });

    expect(result).to.not.be.empty;

    const smallStyle = result[Grid.defaultProps.breakpoints.small];

    expect(smallStyle.alignSelf).to.equal('center');
    expect(smallStyle.justifyContent).to.equal('center');
    expect(smallStyle.order).to.equal('initial');
    expect(smallStyle.flexBasis).to.equal('100%');
  });

  it(`should resolve styles when these are specified:
        1) grid props,
        2) grid breakpoint props
        3) cell props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: 'right',
      cellVerticalAlign: 'bottom',
      smallCellWidth: 1,
      smallCellAlign: 'center',
      smallCellVerticalAlign: 'middle',
      width: 1 / 2,
      align: 'left',
      verticalAlign: 'top'
    });

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.alignSelf).to.equal('flex-start');
      expect(style.justifyContent).to.equal('flex-start');
      expect(style.order).to.equal('initial');
      expect(style.flexBasis).to.equal('50%');
    }
  });

  it(`should resolve styles when these are specified:
        1) grid props,
        2) grid breakpoint props
        3) cell props
        4) cell breakpoint props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: 'right',
      cellVerticalAlign: 'bottom',
      smallCellWidth: 1,
      smallCellAlign: 'center',
      smallCellVerticalAlign: 'middle',
      width: 1 / 2,
      align: 'left',
      verticalAlign: 'top',
      smallWidth: 1 / 3,
      smallAlign: 'right',
      smallVerticalAlign: 'middle'
    });

    expect(result).to.not.be.empty;

    const smallStyle = result[Grid.defaultProps.breakpoints.small];

    expect(smallStyle.alignSelf).to.equal('center');
    expect(smallStyle.justifyContent).to.equal('flex-end');
    expect(smallStyle.order).to.equal('initial');
    expect(smallStyle.flexBasis).to.have.string('33.333');
  });
});
