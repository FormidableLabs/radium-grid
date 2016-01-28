// Help PhantomJS out
require("babel-polyfill");

import React from "react";
import { Grid, Cell } from "../../../../src/index";
import resolveCells from "../../../../src/components/util/resolve-cells";

describe("components/grid", () => {
  const extractMediaQueries = (childProps) => {
    return childProps.map((props) => {
      return Object.keys(props).filter(
        (key) => !key.search(/@media/g)
      );
    });
  };

  const extractBreakpointStyles = (childProps, exclude = "") => {
    return childProps.map((props) => {
      return Object.keys(props).filter(
        (key) => !key.search(/@media/g)
      ).filter((key) => key !== exclude).map(
        (mediaQuery) => props.style[mediaQuery]
      );
    });
  };

  const testCellsAllBreakpoints = (cells, tests) => {
    expect(cells).to.not.be.empty;
    const breakpointStyles = extractBreakpointStyles(
      cells.map((cell) => cell.props)
    );
    for (const breakpointStyle of breakpointStyles) {
      for (const style of breakpointStyle) {
        tests(style);
      }
    }
  };

  const testCellsAllBreakpointsExcept = (cells, breakpoint, tests) => {
    expect(cells).to.not.be.empty;
    const breakpointStyles = extractBreakpointStyles(
      cells.map((cell) => cell.props),
      Grid.defaultProps.breakpoints[breakpoint]
    );
    for (const breakpointStyle of breakpointStyles) {
      for (const style of breakpointStyle) {
        tests(style);
      }
    }
  };

  const testCellsOneBreakpoint = (cells, breakpoint, tests) => {
    expect(cells).to.not.be.empty;
    const breakpointStyle = cells.map(
      (cell) => cell.props.style[Grid.defaultProps.breakpoints[breakpoint]]
    );
    for (const style of breakpointStyle) {
      tests(style);
    }
  };

  it("should map grid breakpoints to Radium media queries", () => {
    const grid = (
      <Grid>
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    const mediaQueries = extractMediaQueries(
      cells.map((cell) => cell.props)
    );
    const expectedMediaQueries = Object.keys(
      Grid.defaultProps.breakpoints
    ).map((key) => Grid.defaultProps.breakpoints[key]);

    for (const queries of mediaQueries) {
      expect(
        JSON.stringify(queries)
      ).to.equal(
        JSON.stringify(expectedMediaQueries)
      );
    }
  });

  it("should resolve styles to sensible defaults when no props are specified", () => {
    const grid = (
      <Grid>
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsAllBreakpoints(cells, (style) => {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("33.333");
    });
  });

  it(`should resolve styles when these are specified:
        1) grid props`, () => {
    const grid = (
      <Grid
        cellWidth="1/4"
        cellAlign="right"
        cellVerticalAlign="bottom"
      >
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    testCellsAllBreakpoints(cells, (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("25");
    });
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) grid breakpoint props`, () => {
    const grid = (
      <Grid
        cellWidth="1/4"
        cellAlign="right"
        cellVerticalAlign="bottom"
        smallCellWidth="1"
        smallCellAlign="center"
        smallCellVerticalAlign="middle"
      >
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsAllBreakpointsExcept(cells, "small", (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("25");
    });

    // Check only small breakpoints on all cells
    testCellsOneBreakpoint(cells, "small", (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("100%");
    });
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) grid breakpoint props
        3) cell props`, () => {
    const grid = (
      <Grid
        cellWidth="1/4"
        cellAlign="right"
        cellVerticalAlign="bottom"
        smallCellWidth="1"
        smallCellAlign="center"
        smallCellVerticalAlign="middle"
      >
        <Cell
          width="1/2"
          align="left"
          verticalAlign="top"
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    const [cellWithCellProps, ...cellsWithoutCellProps] = cells;

    testCellsAllBreakpoints([cellWithCellProps], (style) => {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("50%");
    });

    // Cells with grid props, excluding small breakpoint
    testCellsAllBreakpointsExcept(cellsWithoutCellProps, "small", (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("25%");
    });

    // Cells with small grid breakpoint props
    testCellsOneBreakpoint(cellsWithoutCellProps, "small", (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("100%");
    });
  });


  it(`should resolve styles when these are specified:
        1) grid props
        2) grid breakpoint props
        3) cell props
        4) cell breakpoint props`, () => {
    const grid = (
      <Grid
        cellWidth="1/4"
        cellAlign="right"
        cellVerticalAlign="bottom"
        smallCellWidth="1"
        smallCellAlign="center"
        smallCellVerticalAlign="middle"
      >
        <Cell
          width="1/2"
          align="left"
          verticalAlign="top"
          smallWidth="1/3"
          smallAlign="right"
          smallVerticalAlign="middle"
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    const [cellWithCellProps, ...cellsWithoutCellProps] = cells;

    testCellsAllBreakpointsExcept([cellWithCellProps], "small", (style) => {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("50%");
    });

    testCellsOneBreakpoint([cellWithCellProps], "small", (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("33.333");
    });

    // Cells with grid props, excluding small breakpoint
    testCellsAllBreakpointsExcept(cellsWithoutCellProps, "small", (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("25%");
    });

    // Cells with small grid breakpoint props
    testCellsOneBreakpoint(cellsWithoutCellProps, "small", (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("100%");
    });
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
    const grid = (
      <Grid
        mediumCellWidth="1"
        mediumCellAlign="center"
        mediumCellVerticalAlign="middle"
      >
        <Cell
          mediumWidth="1/4"
          mediumAlign="right"
          mediumVerticalAlign="bottom"
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    const [cellWithCellProps, ...cellsWithoutCellProps] = cells;

    testCellsOneBreakpoint([cellWithCellProps], "medium", (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("25%");
    });

    testCellsOneBreakpoint(cellsWithoutCellProps, "medium", (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("100%");
    });
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) cell props`, () => {
    const grid = (
      <Grid
        cellWidth="1/2"
        cellAlign="left"
        cellVerticalAlign="bottom"
      >
        <Cell
          width="1/5"
          align="center"
          verticalAlign="middle"
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    const [cellWithCellProps, ...cellsWithoutCellProps] = cells;

    testCellsAllBreakpoints([cellWithCellProps], (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("20%");
    });

    testCellsAllBreakpoints(cellsWithoutCellProps, (style) => {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("50%");
    });
  });

  it(`should resolve styles when these are specified:
        1) grid props
        2) cell breakpoint props`, () => {
    const grid = (
      <Grid
        cellWidth="1/3"
        cellAlign="center"
        cellVerticalAlign="middle"
      >
        <Cell
          xlargeWidth="1/5"
          xlargeAlign="right"
          xlargeVerticalAlign="top"
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    const [cellWithCellProps, ...cellsWithoutCellProps] = cells;

    testCellsOneBreakpoint([cellWithCellProps], "xlarge", (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("20%");
    });

    testCellsAllBreakpoints(cellsWithoutCellProps, (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("33.333");
    });
  });

  it(`should resolve styles when these are specified:
        1) grid breakpoint props`, () => {
    const grid = (
      <Grid
        largeCellWidth="1"
        largeCellAlign="left"
        largeCellVerticalAlign="top"
      >
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsOneBreakpoint(cells, "large", (style) => {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("100%");
    });
  });

  it(`should resolve styles when these are specified:
        1) cell props`, () => {
    const grid = (
      <Grid>
        <Cell
          width="1/6"
          align="center"
          verticalAlign="middle"
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsAllBreakpoints([cells[0]], (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("16.666");
    });
  });


  it("should resolve individual cell breakpoint sizes without conflict", () => {
    const grid = (
      <Grid>
        <Cell
          smallWidth="1"
          smallAlign="right"
          smallVerticalAlign="middle"
          largeWidth="1/4"
          largeAlign="center"
          largeVerticalAlign="bottom"
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsOneBreakpoint([cells[0]], "small", (style) => {
      expect(style.justifyContent).to.equal("flex-end");
      expect(style.alignSelf).to.equal("center");
      expect(style.flexBasis).to.have.string("100%");
    });

    testCellsOneBreakpoint([cells[0]], "large", (style) => {
      expect(style.justifyContent).to.equal("center");
      expect(style.alignSelf).to.equal("flex-end");
      expect(style.flexBasis).to.have.string("25%");
    });

    testCellsOneBreakpoint([cells[0]], "medium", (style) => {
      expect(style.justifyContent).to.equal("flex-start");
      expect(style.alignSelf).to.equal("flex-start");
      expect(style.flexBasis).to.have.string("33.333");
    });
  });

  it("should allow overridable cell source order", () => {
    const grid = (
      <Grid>
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell order={1}>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsAllBreakpoints([cells[1]], (style) => {
      expect(style.order).to.equal(1);
    });
  });


  it("should allow customizable fixed gutters", () => {
    const grid = (
      <Grid gutter="24px">
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsAllBreakpoints(cells, (style) => {
      expect(style.flexBasis).to.have.string("calc(33.333");
      expect(style.flexBasis).to.have.string("- 16px");
    });
  });


  it("should allow customizable fluid gutters", () => {
    const grid = (
      <Grid gutter="2%">
        <Cell>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);

    testCellsAllBreakpoints(cells, (style) => {
      expect(style.flexBasis).to.have.string("calc(33.333");

      // TODO: this is a magic number. Write tests for gutter calcs
      expect(style.flexBasis).to.have.string("- 1.3333");
    });
  });


  it("should apply custom props style objects", () => {
    const grid = (
      <Grid>
        <Cell style={{backgroundColor: "blue"}}>
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    expect(cells[0].props.style.backgroundColor).to.equal("blue");
  });

  it("should apply custom props Radium style arrays", () => {
    const grid = (
      <Grid>
        <Cell style=
          {[
            {backgroundColor: "blue"},
            {padding: "1rem"}
          ]}
        >
          <p>testing</p>
        </Cell>
        <Cell>
          <p>testing!</p>
        </Cell>
        <Cell>
          <p>testing?</p>
        </Cell>
      </Grid>
    );
    const cells = resolveCells(grid.props);
    expect(cells[0].props.style.backgroundColor).to.equal("blue");
    expect(cells[0].props.style.padding).to.equal("1rem");
  });

  // it("REGRESSION: should not add gutters to full-width cells", () => {
  //   throw new Error("fail");
  // });
});
