/* global document:false */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Radium, { StyleRoot } from "radium";
import { Grid, Cell } from "../src/index";

@Radium
class App extends Component {
  render() {
    return (
      <StyleRoot className="demo">
        <Grid style={{height: "500px"}}>
          <Cell style={{backgroundColor: "blue"}}>
            <span>Oy Oy Oy</span>
          </Cell>
          <Cell style={{backgroundColor: "red"}}>
            <span>Yo Yo Yo</span>
          </Cell>
          <Cell style={{backgroundColor: "blue"}}>
            <span>Oy Oy Oy</span>
          </Cell>
        </Grid>
      </StyleRoot>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
