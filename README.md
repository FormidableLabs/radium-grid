# Radium Grid [![Build Status](https://travis-ci.org/FormidableLabs/radium-grid.svg?branch=master)](https://travis-ci.org/FormidableLabs/radium-grid) [![Coverage Status](https://coveralls.io/repos/github/FormidableLabs/radium-grid/badge.svg?branch=master)](https://coveralls.io/github/FormidableLabs/radium-grid?branch=master)

Radium Grid is a powerful, no-fuss grid system component for React. It combines the best decisions from the ecosystem of (S)CSS-based grid systems and implements them hack-free on top of Flexbox.

## What makes Radium Grid special?
- Declarative layout using JSX.
- Sensible defaults.
- Uses arbitrary fractions for cell widths. No more 12-column straitjacket!
- Infers rows from the given cell sizes. No need for explicit rows or extra `<div>`s!
- Customizable cell alignment, including a hack-free vertical align!
- Customizable fixed-width and fluid-width gutters. Just pass a CSS unit!
- Customizable media queries for breakpoint definitions.
- Uses Radium Style to handle breakpoint changes efficiently.
- Accepts `style` arrays and resolves them with Radium Style.
- Cascading defaults: set cell props on:
  - all cells for all sizes,
  - all cells for individual sizes,
  - a single cell for all sizes,
  - a single cell for individual sizes,
  - ...with the lowest props in the tree overriding parent props.

## Prerelease
Although this is prerelease software, we'll do our best to avoid breaking public API changes.

## Installation
`npm install --save radium-grid`

## Usage
```es6
import { Grid, Cell } from 'radium-grid';

const App = () => {
  return (
    <Grid>
      <Cell>
        <p>Lorem</p>
      </Cell>
      <Cell>
        <p>ipsum</p>
      </Cell>
      <Cell>
        <p>dolor</p>
      </Cell>
      <Cell>
        <p>sit</p>
      </Cell>
    </Grid>
  );
}
```
The above example will render with the following provided defaults:
- All cells in the grid are 1/3 wide for all screen sizes.
- The grid uses a 16px fixed gutter.
- Cell content is aligned to the top left.
- The breakpoints use the following media queries:
  - small: "@media only screen and (max-width: 640px)",
  - medium: "@media only screen and (min-width: 641px) and (max-width: 1024px)",
  - large: "@media only screen and (min-width: 1025px) and (max-width: 1440px)",
  - xlarge: "@media only screen and (min-width: 1441px)"

To set a default width and alignment for every cell in the grid:
```es6
<Grid cellWidth="1/2">
  <Cell>
    <p>Lorem</p>
  </Cell>
  <Cell>
    <p>ipsum</p>
  </Cell>
</Grid>
```

An example of setting widths and alignment per screen size for every cell in the grid:
```es6
<Grid
  smallCellWidth="1"
  smallAlign="right"
  smallVerticalAlign="bottom"
  mediumCellWidth="1"
  mediumCellAlign="right"
  mediumCellVerticalAlign="bottom"
>
  <Cell>
    <p>Lorem</p>
  </Cell>
  <Cell>
    <p>ipsum</p>
  </Cell>
</Grid>
```

An example of custom per-cell widths and alignments:
```es6
<Grid>
  <Cell
    align="right"
    verticalAlign="bottom"
    width="1/4"
  >
    <p>Lorem</p>
  </Cell>
  <Cell
    align="left"
    verticalAlign="top"
    width="3/4"
  >
    <p>ipsum</p>
  </Cell>
  <Cell
    align="right"
    verticalAlign="bottom"
    width="3/4"
  >
    <p>dolor</p>
  </Cell>
  <Cell
    align="left"
    verticalAlign="top"
    width="1/4"
  >
    <p>sit</p>
  </Cell>
</Grid>
```

The same as above, but with different per-cell widths on small screens:
```es6
<Grid>
  <Cell
    align="right"
    verticalAlign="bottom"
    width="1/4"
    smallWidth="1/2"
  >
    <p>Lorem</p>
  </Cell>
  <Cell
    align="left"
    verticalAlign="top"
    width="3/4"
    smallWidth="1/2"
  >
    <p>ipsum</p>
  </Cell>
</Grid>
```

Custom gutters can use any valid CSS value string. Percentage values create fluid gutters, while all other values create fixed gutters. Example:

```es6
<Grid gutter="24px">
  <Cell>
    <p>Lorem</p>
  </Cell>
  <Cell>
    <p>ipsum</p>
  </Cell>
</Grid>

<Grid gutter="4%">
  <Cell>
    <p>Lorem</p>
  </Cell>
  <Cell>
    <p>ipsum</p>
  </Cell>
</Grid>
```

While we recommend the default breakpoints, you can customize them:
```es6
const breakpoints = {
  small: "@media only screen and (max-width: 320px)",
  medium: "@media only screen and (min-width: 320px) and (max-width: 640px)",
  large: "@media only screen and (min-width: 641px) and (max-width: 1024px)",
  xlarge: "@media only screen and (min-width: 1025px)"
}
<Grid breakpoints={breakpoints}>
  <Cell>
    <p>Lorem</p>
  </Cell>
  <Cell>
    <p>ipsum</p>
  </Cell>
</Grid>
```

## Demo
There are more complex examples on the demo page. Check out the code in [app.jsx](https://github.com/FormidableLabs/radium-grid/blob/master/demo/app.jsx).

### Installation
- Install builder: `npm install -g builder`
- Clone this repo
- `npm install` and then `builder run hot` will load a webpack dev server at localhost:3000

## Gotchas
`<Grid />` only accepts `<Cell />`s as children, since inserting arbitrary children can break the layout. Two options for custom children are:
- Wrap the children in a `<Cell />`.
- Move the children to a sibling of `<Grid>`.
