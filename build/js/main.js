"use strict";
// literal types
let myName;
let userName;
userName = "Kate";
// function
const addNum = (a, b) => {
    return a + b;
};
let subNum = function (c, d) {
    return c - d;
};
let multiNum = function (a, b) {
    return a * b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Welcome");
logMsg(addNum(4, 6));
logMsg(subNum(4, 1));
logMsg(multiNum(4, 7));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 3) => {
    return a + b + c;
};
logMsg(addAll(1, 9, undefined));
logMsg(sumAll(1, 3, undefined));
// Rest parameters
const totalNum = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(totalNum(1, 2, 3));
const createErr = (msg) => {
    throw new Error(msg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i < 100)
            break;
    }
};
// create type guards
const isNumber = (num) => {
    return typeof num === "number" ? true : false;
};
// use never type
const numberOrString = (a) => {
    if (typeof a === "string")
        return "string type";
    if (isNumber(a))
        return "number type";
    return createErr("This should not have done.");
};
