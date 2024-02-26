"use strict";
// Utilities Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (props, propsToUpdate) => {
    return Object.assign(Object.assign({}, props), propsToUpdate);
};
const assignment = {
    studentId: "991",
    title: "Capstone Project",
    grade: 0,
};
console.log(updateAssignment(assignment, { grade: 3.7 }));
const assignA = updateAssignment(assignment, { studentId: "444" });
console.log(assignA);
// Required Utilities
const recordAssignment = (requiredProps) => {
    return requiredProps;
};
console.log(recordAssignment(Object.assign(Object.assign({}, assignment), { verfied: true })));
// Readonly Utilities
const assignmentVerfied = Object.assign(Object.assign({}, assignment), { grade: 3.3, verfied: true });
console.log(assignmentVerfied);
const finalGrades = {
    Amara: "A",
    Chris: "B",
    Marry: "U",
};
const semesterGrades = {
    Amara: { assignA: 32, assignB: 63 },
    Chris: { assignA: 54, assignB: 52 },
    Marry: { assignA: 43, assignB: 56 },
};
console.log(semesterGrades);
const assignResult = {
    studentId: "132",
    grade: 3.78,
};
const assignPreview = {
    grade: 3.56,
    verfied: true,
};
// Return Type
// type NewlyAssign = { title: string; points: number };
// const createNewlyAssign = (title: string, points: number):NewlyAssign => {
//   return { title, points };
// };
const createNewlyAssign = (title, points) => {
    return { title, points };
};
const newAssign = createNewlyAssign("Utility Assing", 60);
console.log(newAssign);
const assignArgsA = ["Assign A", 4];
const assignArgsB = createNewlyAssign(...assignArgsA);
console.log(assignArgsB);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
