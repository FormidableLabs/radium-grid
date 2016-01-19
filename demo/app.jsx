/* global document:false */
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell } from '../src/index';

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <Grid defaultCells={{width: 1 / 3}}>
          <Cell alignment={{horizontal: 'center', vertical: 'bottom'}}>
            <span>Oy Oy Oy</span>
          </Cell>
          <Cell>
            <span>Yo Yo Yo</span>
          </Cell>
          <Cell>
            <span>Oy Oy Oy</span>
          </Cell>
        </Grid>
      </div>
    );
  }
}

const content = document.getElementById('content');

ReactDOM.render(<App/>, content);
