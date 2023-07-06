// write algorithm binary search
function binarySearch(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0 || !Number.isInteger(target)) return -1;

  numberList.sort((a, b) => a - b);
  let left = 0;
  let right = numberList.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);

    if (numberList[mid] === target) return mid;

    if (target > numberList[mid]) {
      left = mid + 1;
    } else {
      right = right - 1;
    }
  }

  return -1;
}

console.log(binarySearch([0, 10, 20, 30, 40, 50], 40));
