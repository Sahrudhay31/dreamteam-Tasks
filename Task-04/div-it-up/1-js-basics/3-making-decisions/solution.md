let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
];

let studentsWhoPass = [];

// loop through each student grade
for (let i = 0; i < allStudents.length; i++) {
  let grade = allStudents[i];

  // Case 1: Numeric grading system (1-5, pass if >= 3)
  if (typeof grade === "number") {
    if (grade >= 3) {
      studentsWhoPass.push(grade);
    }
  }
  // Case 2: Letter grading system (A, A-, B, B-, C, C-)
  else if (typeof grade === "string") {
    // define passing grades
    let passingGrades = ["A", "A-", "B", "B-", "C", "C-"];
    if (passingGrades.includes(grade)) {
      studentsWhoPass.push(grade);
    }
  }
}

console.log("All Students:", allStudents);
console.log("Students Who Pass:", studentsWhoPass);


# OUTPUT
All Students: [ 'A', 'B-', 1, 4, 5, 2 ]
Students Who Pass: [ 'A', 'B-', 4, 5 ]
