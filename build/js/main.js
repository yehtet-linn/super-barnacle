"use strict";
// convert it into more specific to less specific
let a = "welcome";
let b = a; // less specific
let c = a; //more specific
let d = "guy";
let e = "guy";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(6, 1, "concat");
// return as string
let newVal = addOrConcat(9, 2, "add");
// 60 as string
60;
// dom
const img = document.querySelector("img"); // express non null dom
const myImg = document.querySelector("#img");
const nextImg = document.querySelector("#img");
img.src;
myImg.src;
nextImg.src;
