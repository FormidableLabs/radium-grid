const analyzeInput = (string) => {
  const [n, d] =  string.split("/");
  const numerator = parseInt(n, 10);
  const denominator = parseInt(d, 10);
  const zeroIndex = 0;
  const result = numerator / denominator;

  if (string.indexOf(" ") >= zeroIndex) {
    throw new Error("Your fraction must not contain any spaces.");
  }

  if (denominator === 0) {
    throw new Error("The fraction you provided divides by zero.");
  }

  if ((!numerator && isNaN(numerator)) || (!denominator && isNaN(denominator))) {
    if (numerator !== 1) { 
      throw new Error("Your fraction is missing a numerator or denominator.");
    }
  }

  if (result > 1) {
    throw new Error("Your fraction must be less than or equal to 1.");
  }

  return [numerator, denominator];
};

const parseFraction = (string) => {
  const [numerator, denominator] = analyzeInput(string);

  if (numerator === 1 && (!denominator && isNaN(denominator))) {
    return numerator;
  }

  if (numerator === denominator) {
    return 1;
  }

  return numerator / denominator;
};

export default parseFraction;
