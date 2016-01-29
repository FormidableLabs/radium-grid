# Radium Grid

Radium Grid is a powerful, no-fuss grid system component for React. It combines the best decisions from the ecosystem of (S)CSS-based grid systems and implements them hack-free on top of Flexbox.

## What makes Radium Grid special?
- Declarative layout using JSX.
- Uses arbitrary fractions for cell widths. No more 12-column straitjacket!
- Infers rows from the given cell sizes. No need for explicit rows or extra `<div>`s!
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
