const students = [
    { name: "Rahim", age: 20, marks: 85 },
    { name: "Karim", age: 22, marks: 75 },
    { name: "Jabbar", age: 21, marks: 90 },
    { name: "Selim", age: 23, marks: 80 }
];

for (let i = 0; i < students.length; i++) {
    // console.log(students[i]);
}

for (let student of students) {
    // console.log(student);
}

students.forEach(student => {
    // console.log(`${student.name} ${student.marks}`);
});