// partition[pɑːˈtɪʃ.ən]: vách ngăn
// pivot[ˈpɪv.ət]: trục
// quick[quick]: nhanh
const partition = (numberList, left, right) => {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;

  while (i <= j) {
    while (numberList[i] < pivot) i++;
    while (numberList[j] > pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
};

const quickSort = (numberList, left, right) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (!Number.isInteger(left) || left < 0 || !Number.isInteger(right) || right < 0) return [];

  if (left >= right) return numberList;

  const pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
};

const numberList = [1, 2, 3, 1, 5, 4];
console.log(quickSort(numberList, 0, numberList.length - 1));
