"use strict";
const students = [
  { id: 1, name: "Alice", courses: ["Math", "Science"] },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie", courses: null },
  { id: 4, name: "David", courses: ["History"] },
  { id: 5, name: "Eve", courses: ["Math", "English", "Science"] },
];

// get student courses
function getStudentCourses(studentName) {
  const student = students.find((s) => s.name === studentName);
  if (!student) return null;

  const { courses } = student;

  const studentData = console.log(
    `${student.name} is enrolled in the following courses: ${
      courses?.join(", ") ?? "This student does not have any courses"
    }`
  );

  return studentData;
}

// enroll
function enrollStudentInCourse(studentId, courseName) {
  const studentExists = students.findIndex((s) => s.id === studentId);
  if (studentExists === -1) {
    console.error(`Error: Student with id of: ${studentId} does not exist `);
    return;
  }

  // Clone the student obj to avoid modifying the original
  const student = { ...students[studentExists] };
  console.log("=>>>", student);

  // initialize courses as an empty array
  student.courses = student.courses ?? [];

  // convert courses to set to prevent duplicates
  const courseSet = new Set(student.courses);

  // add the new course
  courseSet.add(courseName);

  // update the student's course
  student.courses = [...courseSet];

  // update the students array with the modified data
  students[studentExists] = student;
  console.log(`${student.name} is now enrolled in course: ${courseName}`);
}

function getAllCourses() {
  const allCourses = students
    .map((s) => s.courses ?? [])
    .reduce((acc, courses) => acc.concat(courses), []);

  return [...new Set(allCourses)];
}

enrollStudentInCourse(1, "Programming");

console.log(getAllCourses());
console.log(students);
