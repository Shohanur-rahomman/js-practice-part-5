const students1 = [
    { name: "Rahim", age: 20, marks: 85 },
    { name: "Karim", age: 22, marks: 75 },
    { name: "Jabbar", age: 21, marks: 90 },
    { name: "Selim", age: 23, marks: 80 }
];

const studentFilter = students1.filter((student) => student.marks >= 80);
console.log(studentFilter);

studentFilter.forEach((student) => {
    
    console.log(`${student.name.toLocaleUpperCase()} ${student.age} ${student.marks} `);
});


function topGetStudent(students2) {
    let topStudent = [];
    let topMark = 0;
    for (let student of students2) {
        if (student.marks > topMark) {
            topMark = student.marks;
        }
    }
    for (let student of students2) {
        if (student.marks === topMark) {
            topStudent.push(student)
        }
    }
    return topStudent;
}



const students2 = [
    { name: "Aisha", age: 20, marks: 95 },
    { name: "Rahim", age: 22, marks: 95 },
    { name: "Karim", age: 21, marks: 95 },
    { name: "Jabbar", age: 23, marks: 95}
];
const result = topGetStudent(students2);
console.log(result);
