// bobble sort: bong bóng sắp xếp
const bobbleSort = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < numberList.length; j++) {
      if (numberList[j] > numberList[j + 1]) {
        // const temp = numberList[j];
        // numberList[j] = numberList[j + 1];
        // numberList[j + 1] = temp;
        [numberList[j + 1], numberList[j]] = [numberList[j], numberList[j + 1]];
      }
    }
  }

  return numberList;
};

console.log(bobbleSort([1, 3, 2, 10, 11, 12, 4]));
