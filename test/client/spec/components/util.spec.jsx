/* eslint-disable new-cap */

require("babel-polyfill");

import React from "react";
import ReactDOM from "react-dom";
import { StyleRoot } from "radium";
import TestUtils from "react-addons-test-utils";
import { Grid, Cell } from "../../../../src/index";
import parseFraction from "../../../../src/components/util/parse-fraction";

describe("parse-fraction utility", () => {
  const errorCatcher = cb => {
    let thrown = false;
    try {
      cb();
    } catch (e) {
      thrown = e.toString();
    }
    return thrown;
  };

  it("should return the integer 1 if the string '1' or if a whole fraction is provided", () => {
    expect(parseFraction("1")).to.equal(1);
    expect(parseFraction("1/1")).to.equal(1);
    expect(parseFraction("20/20")).to.equal(1);
  });
  
  it("should throw an error when improper fractions are provided", () => {
    expect(errorCatcher(() => {
      parseFraction("4/1");
    })).to.equal("Error: Your fraction must be less than or equal to 1.");
  });

  it("should throw an error when spaces are included in the input", () => {
    const spaces = ["1 ", "1 1/2", "1/ 4", "1/3 "];
    var errThrown = spaces.every(str => {
      return errorCatcher(() => {
        parseFraction(str);
      }) === "Error: Your fraction must not contain any spaces.";
    });
    
    expect(errThrown).to.be.true;
  });
    
  it("should throw a error when zero is provided as a denominator", () => {
    expect(errorCatcher(() => {
      parseFraction("2/0");
    })).to.equal("Error: The fraction you provided divides by zero.");
  });

  it("should take fractions and return the corresponding floating point numbers <= 1", () => {
    expect(parseFraction("1/2")).to.equal((1 / 2));
    expect(parseFraction("1/3")).to.equal((1 / 3));
    expect(parseFraction("12/12")).to.equal((12 / 12));
    expect(parseFraction("1/6")).to.equal((1 / 6));
    expect(parseFraction("1/6")).to.equal((1 / 6));
  });

});