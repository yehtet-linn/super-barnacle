"use strict";
// Arrays
let fruitArr = ["Apple", "Orange", "Pineapple"];
let seller = ["Paul", "Robbery", 678];
let mixed = ["Chris", 432, false];
fruitArr[0] = "Onion";
fruitArr.push("Grape");
seller[0] = 423;
seller.unshift("Chains");
let test = [];
let bands = [];
bands.push("Brown");
// Tuple
let myTuple = [532, "Kate", true];
let records = [423, "Berry", false];
records = myTuple;
myTuple[1] = "Rob";
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
let instanceObj = {
    propA: "Chase",
    propB: 23,
};
instanceObj.propA = "Kelvin";
let eu = {
    name: "Flusk",
    isActive: true,
    album: [432, "Drone"],
};
let jp = {
    name: "Vivo",
    album: [43, "Groovy", "Honey"],
};
eu = jp;
const guitarHolder = (guitarList) => {
    if (guitarList.name) {
        return `Welcome${guitarList.name.toUpperCase()}`;
    }
    return "Superfine";
};
console.log(guitarHolder(jp));
// enums
var grades;
(function (grades) {
    grades[grades["A"] = 98] = "A";
    grades[grades["B"] = 80] = "B";
    grades[grades["C"] = 70] = "C";
    grades[grades["D"] = 60] = "D";
})(grades || (grades = {}));
console.log(grades.A);
