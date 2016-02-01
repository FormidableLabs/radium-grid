const parseFraction = (string) => {
  const [n, d] = string.split("/");
  const numerator = parseInt(n, 10);
  const denominator = parseInt(d, 10);

  if (numerator === 1 && !denominator) {
    return numerator;
  }

  if (!(numerator && denominator)) {
    throw new Error("Your fraction is missing a numerator or denominator.");
  }

  if (denominator === 0) {
    throw new Error("The fraction you provided divides by zero.");
  }

  return numerator / denominator;
};

export default parseFraction;
