const parseFraction = (string) => {
  const [n, d] = string.split("/");
  const numerator = parseInt(n, 10);
  const denominator = parseInt(d, 10);

  if(string.indexOf(" ") > -1){
    throw new Error("Your fraction must not contain any spaces.");
  }
  if (numerator === 1 && (!denominator && isNaN(denominator)) ) {
    return numerator;
  }

  if (denominator === 0) {
    throw new Error("The fraction you provided divides by zero.");
  }

  if (!(numerator && denominator)) {
    throw new Error("Your fraction is missing a numerator or denominator.");
  }

  if (numerator === denominator) {
    return 1;
  }


  const result = numerator / denominator;
  if (result > 1) {
    throw new Error("Your fraction must be less than or equal to 1.");
  }
  return result;
};

export default parseFraction;
