const students = [
  { name: "Alice", age: 20, grade: 75 },
  { name: "Bob", age: 22, grade: 85 },
  { name: "Charlie", age: 21, grade: 60 },
  { name: "David", age: 19, grade: 45 },
  { name: "Eve", age: 20, grade: 90 },
];

function filterPassedStudents(students: Array<any>) {
  const result = students.filter((st) => st.grade >= 50);
  return result;
}
function getStudentNames(students: Array<any>) {
  const ans = students.map((student) => student.name);
  return ans;
}
function sortStudentsByGrade(students: Array<any>) {
  return students.sort((a, b) => b.grade - a.grade);
}
function getAverageAge(students: Array<any>) {
  const sum = students.reduce((total, student) => (total = student.age), 0);
  return sum / students.length;
}

console.log(filterPassedStudents(students));
console.log(getStudentNames(students));
console.log(sortStudentsByGrade(students));
console.log(getAverageAge(students));
