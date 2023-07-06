// write function hasTwoDigitsWithSum(n, sum)
export const hasTwoDigitsWithSum = (n, sum) => {
  if (!Number.isInteger(n) || n <= 9 || n >= 1000000) return false;
  if (!Number.isInteger(sum) || sum <= 0 || sum >= 19) return false;

  let valid = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    valid += +str[i];
  }
  return valid === sum;
};
