// tìm vị trí sinh viên theo tên trong danh sách học sinh
const studentList = [
  { id: 2, name: ' jOHn ', marks: { math: 10, english: 10 } },
  { id: 1, name: 'Alice', marks: { math: 9, english: 10 } },
  { id: 3, name: 'Bob', marks: { math: 5, english: 10 } },
];

const sortByName = (studentList) => {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    const name1 = s1.name.trim().toLowerCase();
    const name2 = s2.name.trim().toLowerCase();

    if (name1 > name2) return 1;
    if (name1 < name2) return -1;
    return 0;
  });
};

const binarySearchName = (studentList, target) => {
  if (
    !Array.isArray(studentList) ||
    studentList.length <= 2 ||
    typeof target !== 'string' ||
    target.trim().length === 0
  )
    return -1;

  let left = 0;
  let right = studentList.length - 1;
  target = target.toLowerCase().trim();

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    let name = studentList[mid].name.toLowerCase().trim();

    if (name === target) return mid;

    if (target > name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
console.log(binarySearchName(sortByName(studentList), 'bob'));

// sắp xếp giảm dần dùng bubble sort
const bubbleSortDescending = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (!numberList.every((num) => typeof num === 'number' && Number.isInteger(num))) {
    return [];
  }

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < numberList.length; j++) {
      if (numberList[j] < numberList[j + 1]) {
        const temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }

  return numberList;
};
console.log(bubbleSortDescending([6, 9, 4, 1, 2, 3, 5]));

// sắp xếp giảm dần dùng quick sort
const partition = (numberList, left, right) => {
  let mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;
  while (i <= j) {
    while (numberList[i] > pivot) i++;
    while (numberList[j] < pivot) j--;

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
  if (!numberList.every((num) => typeof num === 'number' && Number.isInteger(num))) return [];
  if (!Number.isInteger(left) || left < 0 || !Number.isInteger(right) || right < 0) return [];

  if (left >= right) return numberList;

  let pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
};
const numberList = [8, 6, 3, 4, 7, 2, 9, 1, 5];
console.log(quickSort(numberList, 0, numberList.length - 1));
