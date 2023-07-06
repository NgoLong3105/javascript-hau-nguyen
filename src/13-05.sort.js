const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 10 } },
  { id: 3, name: 'Bob', marks: { math: 5, english: 10 } },
  { id: 2, name: 'John', marks: { math: 10, english: 10 } },
];

const sortById = (studentList) => {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => s1.id - s2.id);
};
// console.log(sortById(studentList));

const sortByName = (studentList) => {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    if (s1.name > s2.name) return 1;
    if (s1.name < s2.name) return -1;
    return 0;
  });
};
// console.log(sortByName(studentList));

const sortByAvg = (studentList) => {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    const s1Avg =
      Object.values(s1.marks).reduce((total, scores) => total + scores, 0) /
      Object.values(s1.marks).length;

    const s2Avg =
      Object.values(s2.marks).reduce((total, scores) => total + scores, 0) /
      Object.values(s2.marks).length;

    return s2Avg - s1Avg;
  });
};
// console.log(sortByAvg(studentList));
