//task 1
let products = [1, 5, 2, 3];
console.log(products.slice(products.length - 1));
console.log("\n");

//task2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles.splice(styles.length - 2, 1, "Classic");
console.log(styles);
console.log(styles.shift());
styles.unshift("Rep", "Reggi");
console.log(styles);
console.log("\n");

//task 3
let array = [1, 3, 5, 7];
find(array, 2);
find(array, 5);
console.log("\n");

function find(arr, value) {
    console.log(arr.indexOf(value));
}

//task 4
let numbers = [5, -18, -9, 22, 15, -29, -2, -13, 9, 23, 25, -30, -11, 12, -1, 0, -9, 29, -23, 30];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
let positive = numbers.filter(elem => elem >= 0);
let negative = numbers.filter(elem => elem < 0);
console.log(positive);
console.log(negative);
console.log("\n");

//task 5
array = [0, 1, 2, 3, 4, 5, 6];
newArray = filterRange(array, 2, 4);
console.log(newArray);

function filterRange(array, a, b) {
    return array.slice(a, b + 1);
}

//task 6
console.log(camelize("my-short-string"));

function camelize(str) {
    let strArr = str.split("-");
    strArr.forEach(a => {
        if (strArr.indexOf(a) === 0) {
            return a;
        } else {
            return strArr.splice(strArr.indexOf(a), 1, a.charAt(0).toUpperCase() + a.slice(1));
        }
    });
    return strArr.join("");
}

//task 7
let yearsOfStuding = [2016, 2017, 2018, 2019];
let facultysNames = ["philosofy", "computer science", "math faculty", "computer engineer", "design faculty"];
let students = [];
generateSudent(10);
console.log(students);
let facultyStudents = students.filter(a => a.facultyName === "computer science");
console.log(facultyStudents);
console.log(students.reduce((sum, student) => ({yearOfStuding: sum.yearOfStuding + student.yearOfStuding})).yearOfStuding);

function generateSudent(count) {
    for (let i = 0; i < count; i++) {
        Student = {
            yearOfStuding: yearsOfStuding[Math.floor(Math.random() * yearsOfStuding.length)],
            facultyName: facultysNames[Math.floor(Math.random() * facultysNames.length)]
        };
        students.push(Student);
    }
}