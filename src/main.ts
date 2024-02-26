// using index signature

// Phase 1
// interface TransactionObj {
//   readonly [index: string]: number;
// }
interface TransactionObj {
  readonly [index: string]: number;
  Food: number;
  Books: number;
  Hobbies: number;
}

// interface TransactionObj {
//   Food: string;
//   Books: string;
//   Hobbies: string;
// }

const transactionObj: TransactionObj = {
  Food: 20,
  Books: 10,
  Hobbies: 30,
  Job: 33,
};

console.log(transactionObj.Books);
console.log("Books (pointer)" + transactionObj["Books"]);

const prop: string = "Books";
console.log("Books (index signature)" + transactionObj[prop]);

const todayTrans = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todayTrans(transactionObj));
console.log(transactionObj["Job"]);

// Phase 2
interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  gpa: number;
  classes?: number[];
}

const student: Student = {
  name: "John",
  gpa: 3.5,
  classes: [100, 300],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key} ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(`${key} ${student[key as keyof typeof student]}`);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} is ${student[key]}`);
};

logStudentKey(student, "gpa");
logStudentKey(student, "name");

// Phase 3
// using Record utilities

// interface Streams {
//   salary: string;
//   bonus: string;
//   fees: string;
// }
type Streams = "salary" | "bonus" | "fees";

type Incomes = Record<Streams, string | number>;

const incomes: Incomes = {
  salary: 100,
  bonus: 400,
  fees: "600",
};

for (const revenue in incomes) {
  console.log(`${revenue} ${incomes[revenue as keyof Incomes]}`);
}
