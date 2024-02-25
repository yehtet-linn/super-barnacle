// type aliaes
type stringOrNum = string | number;
type stringOrNumArr = (string | number)[];

type GuitarList = {
  name?: string;
  isActive?: boolean;
  album: stringOrNumArr;
};

type userId = stringOrNum;

// literal types
let myName: "Chains";

let userName: "Chase" | "David" | "Kate";
userName = "Kate";

// function
const addNum = (a: number, b: number): number => {
  return a + b;
};

let subNum = function (c: number, d: number): number {
  return c - d;
};

// type mathFunc = (a: number, b: number) => number;
interface mathFunc {
  (a: number, b: number): number;
}

let multiNum: mathFunc = function (a, b): number {
  return a * b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg("Welcome");
logMsg(addNum(4, 6));
logMsg(subNum(4, 1));
logMsg(multiNum(4, 7));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 3): number => {
  return a + b + c;
};

logMsg(addAll(1, 9, undefined));
logMsg(sumAll(1, 3, undefined));

// Rest parameters
const totalNum = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(totalNum(1, 2, 3));

const createErr = (msg: string): never => {
  throw new Error(msg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i < 100) break;
  }
};

// create type guards
const isNumber = (num: any): boolean => {
  return typeof num === "number" ? true : false;
};

// use never type
const numberOrString = (a: string | number): string => {
  if (typeof a === "string") return "string type";
  if (isNumber(a)) return "number type";

  return createErr("This should not have done.");
};
