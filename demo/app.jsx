/* global document:false */
/* eslint-disable new-cap */
import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style, StyleRoot } from "radium";
import { Grid, Cell } from "../src/index";

const colors = {
  formidared: "#FF4136",
  shade1: "#CC342B",
  shade2: "#B22D26",
  shade3: "#992720",
  white: "#fff",
  black: "#2b303b"
};

const App = () => {
  return (
    <StyleRoot className="demo">
      <Style rules={App.styles.global} />
      <h1>Radium Grid Demo</h1>
      <h4>Resize for full effect!</h4>

      <h2>Default widths</h2>
      <Grid cellWidth="1/2">
        <Cell style={[App.styles.cell, App.styles.redCell]}>
          <p style={App.styles.cellText}>Sensible out-of-the-box sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.darkRedCell]}>
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.blackCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.redCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
      </Grid>

      <h2>Default widths per screen size</h2>
      <Grid
        xlargeCellWidth="1/3"
        largeCellWidth="1/3"
        mediumCellWidth="1/2"
        smallCellWidth="1"
      >
        <Cell style={[App.styles.cell, App.styles.redCell]}>
          <p style={App.styles.cellText}>Sensible out-of-the-box sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.darkRedCell]}>
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.blackCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.redCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.darkRedCell]}>
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.blackCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
      </Grid>

      <h2>Custom per-cell widths</h2>
      <Grid
        xlargeCellWidth="1/4"
        largeCellWidth="1/4"
        mediumCellWidth="1/3"
        smallCellWidth="1"
      >
        <Cell
          xlargeWidth="1/6"
          largeWidth="2/3"
          style={[App.styles.cell, App.styles.redCell]}
        >
          <p style={App.styles.cellText}>Sensible out-of-the-box sizes!</p>
        </Cell>
        <Cell
          xlargeWidth="1/6"
          largeWidth="1/3"
          style={[App.styles.cell, App.styles.redCell]}
        >
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
        <Cell
          xlargeWidth="1/6"
          largeWidth="1/3"
          smallWidth="1/2"
          style={[App.styles.cell, App.styles.redCell]}
        >
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
        <Cell
          xlargeWidth="1/2"
          largeWidth="2/3"
          mediumWidth="1"
          smallWidth="1/2"
          style={[App.styles.cell, App.styles.redCell]}
        >
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
      </Grid>

      <h2>Custom fixed gutters</h2>
      <Grid
        xlargeCellWidth="1/4"
        largeCellWidth="1/4"
        mediumCellWidth="1/2"
        smallCellWidth="1"
        gutter="24px"
        cellAlign="right"
        cellVerticalAlign="middle"
      >
        <Cell style={[App.styles.cell, App.styles.redCell]}>
          <p style={App.styles.cellText}>Sensible out-of-the-box sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.darkRedCell]}>
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.blackCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.redCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
      </Grid>

      <h2>Custom fluid gutters</h2>
      <Grid
        cellWidth="1/3"
        gutter="4%"
      >
        <Cell style={[App.styles.cell, App.styles.redCell]}>
          <p style={App.styles.cellText}>Sensible out-of-the-box sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.darkRedCell]}>
          <p style={App.styles.cellText}>Arbitrary fractions for cell sizes!</p>
        </Cell>
        <Cell style={[App.styles.cell, App.styles.blackCell]}>
          <p style={App.styles.cellText}>Customizable breakpoints!</p>
        </Cell>
      </Grid>
    </StyleRoot>
  );
};

App.styles = {
  global: {
    body: {
      fontFamily: "Whitney SSm A, Whitney SSm B, Helvetica Neue, Helvetica, Arial, sans-serif",
      lineHeight: 1.5,
      margin: 0
    },
    p: {
      margin: 0
    }
  },
  cell: {
    marginBottom: "1rem",
    padding: "1rem",
    minWidth: "0",
    height: "150px"
  },
  redCell: {
    backgroundColor: colors.shade1
  },
  darkRedCell: {
    backgroundColor: colors.shade3
  },
  blackCell: {
    backgroundColor: colors.black
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  cellText: {
    color: colors.white
  }
};

const Wrapper = Radium(App);

ReactDOM.render(<Wrapper/>, document.getElementById("content"));
