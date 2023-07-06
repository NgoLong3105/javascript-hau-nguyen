// ARRAY-SUM-01:
export const sumEvenNumbers = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  let arr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < numberList[i + 1] && numberList[i + 1] % 2 === 0) {
      arr.push(numberList[i + 1]);
    }
  }
  return arr.reduce((total, num) => total + num, 0);
};

// ARRAY-SUM-02:
export const sumAllDigits = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');

  return numberList
    .map((num) => num.toString().split(''))
    .flat()
    .reduce((total, num) => total + parseInt(num), 0);
};

// ARRAY-SUM-03:
export const sumAllMinDigits = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');

  return numberList
    .map((num) => [...num.toString()].sort((a, b) => parseInt(a) - parseInt(b))[0])
    .reduce((total, num) => total + parseInt(num), 0);
};

// ARRAY-SUM-04:
export const calcCartTotal = (cartItemList) => {
  if (!Array.isArray(cartItemList) || !cartItemList.length) throw new Error('Invalid input');

  return cartItemList.reduce((total, cart) => total + cart.product.price * cart.quantity, 0);
};
