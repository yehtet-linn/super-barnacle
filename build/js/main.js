"use strict";
// using index signature
// interface TransactionObj {
//   Food: string;
//   Books: string;
//   Hobbies: string;
// }
const transactionObj = {
    Food: 20,
    Books: 10,
    Hobbies: 30,
    Job: 33,
};
console.log(transactionObj.Books);
console.log("Books (pointer)" + transactionObj["Books"]);
const prop = "Books";
console.log("Books (index signature)" + transactionObj[prop]);
const todayTrans = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayTrans(transactionObj));
console.log(transactionObj["Job"]);
const student = {
    name: "John",
    gpa: 3.5,
    classes: [100, 300],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key} ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(`${key} ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} is ${student[key]}`);
};
logStudentKey(student, "gpa");
logStudentKey(student, "name");
const incomes = {
    salary: 100,
    bonus: 400,
    fees: "600",
};
for (const revenue in incomes) {
    console.log(`${revenue} ${incomes[revenue]}`);
}
