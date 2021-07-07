//task 1
let admin;
let name;
name = "John";
admin = name;
console.log(admin);

//task 2
let login = "Admin";
let password = "TheMaste";
console.log(getAnswer(login, password));
console.log(getAnswer(login, "TheMaster"));
console.log("\n");

function getAnswer(login, password) {
    if (login === "Cancel") {
        return "Canceled"
    } else if (login === "Admin") {
        if (password === "TheMaster") {
            return "Welcome"
        } else if (password === "Cancel") {
            return "Canceled"
        } else {
            return "Wrong password"
        }
    } else {
        return "I don't know you"
    }
}

//task 3
let user = {};
user.name = "Pylyp";
user.surname = "Shevchenko";
getFields(user);
user.name = "Sergio";
getFields(user);
delete user.name;
getFields(user);

function getFields(obj) {
    for (let value in obj) {
        console.log(obj[value])
    }
    console.log("\n")
}

//task 4
let employeeSalaries = {};
console.log(getSum(employeeSalaries));

employeeSalaries = {
    salary1: 100,
    salary2: 145,
    salary3: 120
};
console.log(getSum(employeeSalaries));
console.log("\n");

function getSum(obj) {
    let sum = 0;
    for (let qty in obj) {
        sum += obj[qty];
    }
    return sum
}

//task 5
console.log(calculate(1, 2, "/"));
console.log(calculate(2, 0, "/"));
console.log(calculate(1.5, 2, "/"));
console.log("\n");

function calculate(a, b, action) {
    if (action === "+") {
        return a + b
    } else if (action === "-") {
        return a - b
    } else if (action === "*") {
        return a * b
    } else if (action === "/") {
        if (b === 0) {
            return "Division by zero"
        } else {
            return a / b
        }
    } else {
        return "Uncorrect operation"
    }
}

//task 6
let login2 = "Admin";
let password2 = "TheMaste";
console.log(getAnswer2(login2, password2));
console.log(getAnswer2(login2, "TheMaster"));
console.log("\n");

function getAnswer2(login, password) {
    switch (login) {
        case'Admin':
            switch (password) {
                case 'TheMaster':
                    return "Welcom";
                case 'Cancel':
                    return "Canceled";
                default:
                    return "Wrong password"
            }
        case'Cancel':
            return "Canceled";
        default:
            return "I don't know you"
    }
}