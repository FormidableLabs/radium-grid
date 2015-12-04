/**
 * Client tests
 */
import React from 'react';
import { Grid, Cell } from '../../../../src/index';
import TestUtils from 'react-addons-test-utils';

describe('components/grid', () => {
  it('should allow individual cells to override grid and breakpoint defaults', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <Grid defaultCells={{width: 1 / 3}}>
        <Cell alignment={{horizontal: 'center', vertical: 'bottom'}}>
          <span>Oy Oy Oy</span>
        </Cell>
        <Cell>
          <span>Oy Oy Oy</span>
        </Cell>
        <Cell>
          <span>Oy Oy Oy</span>
        </Cell>
      </Grid>
    );
    const output = renderer.getRenderOutput();

    throw new Error('fail');
  });
});
