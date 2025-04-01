function topGetStudent(students3) {
    if (students3.length === 0) {
        return [];
    }
    const topMark = students3.reduce((max, student) => Math.max(max, student.marks), 0);
    return students3.filter((student) => student.marks === topMark);
}



const students3 = [
    { name: "Aisha", age: 20, marks: 95 },
    { name: "Rahim", age: 22, marks: 77 },
    { name: "Karim", age: 21, marks: 95 },
    { name: "Jabbar", age: 23, marks: 90 }
];
const result1 = topGetStudent(students3);
console.log(result1);