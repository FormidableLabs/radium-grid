/* global document:false */
import React from 'react';
import ReactDOM from 'react-dom';
import Radium, { StyleRoot } from 'radium';
import { Grid, Cell } from '../src/index';

@Radium
class App extends React.Component {
  render() {
    return (
      <StyleRoot className="demo">
        <Grid defaultCells={{width: 1 / 3}} style={{height: '500px'}}>
          <Cell alignment={{horizontal: 'right', vertical: 'bottom'}}>
            <span>Oy Oy Oy</span>
          </Cell>
          <Cell>
            <span>Yo Yo Yo</span>
          </Cell>
          <Cell>
            <span>Oy Oy Oy</span>
          </Cell>
        </Grid>
      </StyleRoot>
    );
  }
}

const content = document.getElementById('content');

ReactDOM.render(<App/>, content);
