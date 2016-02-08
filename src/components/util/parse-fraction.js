const validateFraction = (fraction) => {
  const [n, d] = fraction;

  // Remove all whitespace and parse numbers
  const numerator = parseInt(n.replace(/\s/g, ""), 10);
  const denominator = parseInt(d.replace(/\s/g, ""), 10);
  const result = numerator / denominator;

  if (denominator === 0) {
    throw new Error("Your fraction divides by zero.");
  }

  if (!numerator || !denominator) {
    throw new Error("Your fraction is missing a numerator or denominator.");
  }

  if (result > 1) {
    throw new Error("Your fraction must be less than or equal to 1.");
  }

  return [numerator, denominator];
};

const parseFraction = (string) => {
  if (string.trim() === "1") {
    return 1;
  }

  const [rawNumerator, rawDenominator] = string.split("/");
  const [numerator, denominator] = validateFraction([
    rawNumerator, rawDenominator
  ]);

  return numerator / denominator;
};

export default parseFraction;
