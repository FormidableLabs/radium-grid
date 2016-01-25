// Help PhantomJS out
require("babel-polyfill");

import { Grid } from "../../../../src/index";
import resolveCellStyles from "../../../../src/components/util/resolve-cell-styles";

describe("components/grid", () => {
  const extractMediaQueries = (result) => {
    return Object.keys(result).filter(
      (key) => !key.search(/@media/g)
    );
  };

  const extractBreakpointStyles = (result) => {
    return extractMediaQueries(result)
      .map((key) => result[key]);
  };

  it("should be a flex container", () => {
    const result = resolveCellStyles(Grid.defaultProps);

    expect(result).to.not.be.empty;
    expect(result.display).to.equal("flex");
  });

  it("should map grid breakpoints to Radium media queries", () => {
    const result = resolveCellStyles(Grid.defaultProps);

    const mediaQueries = extractMediaQueries(result);
    const expectedMediaQueries = Object.keys(
      Grid.defaultProps.breakpoints
    ).map((key) => Grid.defaultProps.breakpoints[key]);

    expect(
      JSON.stringify(mediaQueries)
    ).to.equal(
      JSON.stringify(expectedMediaQueries)
    );
  });

  it("should resolve styles to sensible defaults when no props are specified", () => {
    const result = resolveCellStyles(Grid.defaultProps);

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("33.333");
    }
  });

  it(`should resolve styles when these are specified:
        1) grid props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: "right",
      cellVerticalAlign: "bottom"
    });

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("25");
    }
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) grid breakpoint props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: "right",
      cellVerticalAlign: "bottom",
      smallCellWidth: 1,
      smallCellAlign: "center",
      smallCellVerticalAlign: "middle"
    });

    expect(result).to.not.be.empty;

    const smallStyle = result[Grid.defaultProps.breakpoints.small];

    expect(smallStyle.justifyContent).to.equal("center");
    expect(smallStyle.alignSelf).to.equal("center");
    expect(smallStyle.flexBasis).to.have.string("100%");
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) grid breakpoint props
        3) cell props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: "right",
      cellVerticalAlign: "bottom",
      smallCellWidth: 1,
      smallCellAlign: "center",
      smallCellVerticalAlign: "middle",
      width: 1 / 2,
      align: "left",
      verticalAlign: "top"
    });

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("50%");
    }
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) grid breakpoint props
        3) cell props
        4) cell breakpoint props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      cellWidth: 1 / 4,
      cellAlign: "right",
      cellVerticalAlign: "bottom",
      smallCellWidth: 1,
      smallCellAlign: "center",
      smallCellVerticalAlign: "middle",
      width: 1 / 2,
      align: "left",
      verticalAlign: "top",
      smallWidth: 1 / 3,
      smallAlign: "right",
      smallVerticalAlign: "middle"
    });

    expect(result).to.not.be.empty;

    const smallStyle = result[Grid.defaultProps.breakpoints.small];

    expect(smallStyle.justifyContent).to.equal("flex-end");
    expect(smallStyle.alignSelf).to.equal("center");
    expect(smallStyle.flexBasis).to.have.string("33.333");
  });

  // Pairwise tests
  // Grid  Grid breakpoint  Cell  Cell breakpoint
  // no    yes              no    yes
  // yes   no               yes   no
  // yes   yes              yes   yes
  // yes   no               no    yes
  // no    yes              no    no
  // no    no               yes   no
  it(`should resolve styles when these are specified:
        1) grid breakpoint props
        2) cell breakpoint props`, () => {
    const { breakpoints, gutter } = Grid.defaultProps;
    const result = resolveCellStyles({
      ...{ breakpoints, gutter },
      mediumCellWidth: 1,
      mediumCellAlign: "center",
      mediumCellVerticalAlign: "middle",
      mediumWidth: 1 / 4,
      mediumAlign: "right",
      mediumVerticalAlign: "bottom"
    });

    expect(result).to.not.be.empty;

    const mediumStyle = result[Grid.defaultProps.breakpoints.medium];

    expect(mediumStyle.justifyContent).to.equal("flex-end");
    expect(mediumStyle.alignSelf).to.equal("flex-end");
    expect(mediumStyle.flexBasis).to.have.string("25%");
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) cell props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      width: 1 / 5,
      align: "center",
      verticalAlign: "middle"
    });

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("20%");
    }
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) cell breakpoint props`, () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      xlargeWidth: 1 / 2,
      xlargeAlign: "right",
      xlargeVerticalAlign: "bottom"
    });

    expect(result).to.not.be.empty;

    const xlargeStyle = result[Grid.defaultProps.breakpoints.xlarge];

    expect(xlargeStyle.justifyContent).to.equal("flex-end");
    expect(xlargeStyle.alignSelf).to.equal("flex-end");
    expect(xlargeStyle.flexBasis).to.have.string("50%");
  });

  it(`should resolve styles when these are specified:
        1) grid breakpoint props`, () => {
    const { breakpoints, gutter } = Grid.defaultProps;
    const result = resolveCellStyles({
      ...{ breakpoints, gutter },
      largeCellWidth: 1,
      largeCellAlign: "left",
      largeCellVerticalAlign: "top"
    });

    expect(result).to.not.be.empty;

    const largeStyle = result[Grid.defaultProps.breakpoints.large];

    expect(largeStyle.justifyContent).to.equal("flex-start");
    expect(largeStyle.alignSelf).to.equal("flex-start");
    expect(largeStyle.flexBasis).to.have.string("100%");
  });

  it(`should resolve styles when these are specified:
        1) cell props`, () => {
    const { breakpoints, gutter } = Grid.defaultProps;
    const result = resolveCellStyles({
      ...{ breakpoints, gutter },
      width: 1 / 6,
      align: "center",
      verticalAlign: "middle"
    });

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("16.666");
    }
  });

  it("should resolve individual cell breakpoint sizes without conflict", () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      smallWidth: 1,
      smallAlign: "right",
      smallVerticalAlign: "middle",
      largeWidth: 1 / 4,
      largeAlign: "center",
      largeVerticalAlign: "bottom"
    });

    expect(result).to.not.be.empty;

    const smallStyle = result[Grid.defaultProps.breakpoints.small];
    const mediumStyle = result[Grid.defaultProps.breakpoints.medium];
    const largeStyle = result[Grid.defaultProps.breakpoints.large];

    expect(smallStyle.justifyContent).to.equal("flex-end");
    expect(smallStyle.alignSelf).to.equal("center");
    expect(smallStyle.flexBasis).to.have.string("100%");

    expect(mediumStyle.justifyContent).to.equal("flex-start");
    expect(mediumStyle.alignSelf).to.equal("flex-start");
    expect(mediumStyle.flexBasis).to.have.string("33.333");

    expect(largeStyle.justifyContent).to.equal("center");
    expect(largeStyle.alignSelf).to.equal("flex-end");
    expect(largeStyle.flexBasis).to.have.string("25%");
  });

  it("should allow overridable cell source order", () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      order: 1
    });

    expect(result).to.not.be.empty;

    for (const style of extractBreakpointStyles(result)) {
      expect(style.order).to.equal(1);
    }
  });

  it("should allow customizable fixed gutters", () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      gutter: "16px"
    });

    for (const style of extractBreakpointStyles(result)) {
      expect(style.flexBasis).to.have.string("calc(33.333");
      expect(style.flexBasis).to.have.string("- 16px");
    }
  });

  it("should allow customizable fluid gutters", () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      gutter: "2%"
    });

    for (const style of extractBreakpointStyles(result)) {
      expect(style.flexBasis).to.have.string("calc(33.333");
      expect(style.flexBasis).to.have.string("- 2%");
    }
  });

  it("REGRESSION: should not clobber custom cell styles", () => {
    const result = resolveCellStyles({
      ...Grid.defaultProps,
      style: {
        backgroundColor: "blue"
      }
    });

    expect(result).to.not.be.empty;
    expect(result.backgroundColor).to.equal("blue");
  });
});
