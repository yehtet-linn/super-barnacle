type One = string;
type Two = string | number;
type Three = "welcome";

// convert it into more specific to less specific
let a: One = "welcome";
let b = a as Two; // less specific
let c = a as Three; //more specific

let d = <One>"guy";
let e = <string | number>"guy";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(6, 1, "concat") as string;
// return as string
let newVal: number = addOrConcat(9, 2, "add") as number;

// 60 as string
60 as unknown as string;

// dom
const img = document.querySelector("img")!; // express non null dom
const myImg = document.querySelector("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.querySelector("#img");

img.src;
myImg.src;
nextImg.src;
