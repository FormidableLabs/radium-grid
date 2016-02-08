/* eslint-disable new-cap */

require("babel-polyfill");

import parseFraction from "../../../../src/components/util/parse-fraction";

describe("Fraction parser", () => {
  it("should return the integer 1 if the string '1' or if a whole fraction is provided", () => {
    expect(parseFraction("1")).to.equal(1);
    expect(parseFraction("1/1")).to.equal(1);
    expect(parseFraction("20/20")).to.equal(1);
  });

  it("should not allow improper fractions", () => {
    expect(parseFraction.bind(null, "4/1")).to.throw(Error);
  });

  it("should allow spaces in otherwise valid input", () => {
    expect(parseFraction("1 ")).to.equal(1);
    expect(parseFraction(" 1  ")).to.equal(1);
    expect(parseFraction("1/ 4")).to.equal(1 / 4);
    expect(parseFraction("1/3 ")).to.equal(1 / 3);
    expect(parseFraction.bind(null, "1 1/2")).to.throw(Error);
  });

  it("should not allow division by zero", () => {
    expect(parseFraction.bind(null, "2/0")).to.throw(Error);
  });

  it("should convert fraction strings into decimals", () => {
    expect(parseFraction("1/2")).to.equal((1 / 2));
    expect(parseFraction("1/3")).to.equal((1 / 3));
    expect(parseFraction("12/12")).to.equal((12 / 12));
    expect(parseFraction("1/6")).to.equal((1 / 6));
    expect(parseFraction("1/6")).to.equal((1 / 6));
  });
});
