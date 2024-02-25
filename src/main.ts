// Arrays
let fruitArr = ["Apple", "Orange", "Pineapple"];
let seller = ["Paul", "Robbery", 678];
let mixed = ["Chris", 432, false];

fruitArr[0] = "Onion";
fruitArr.push("Grape");

seller[0] = 423;
seller.unshift("Chains");

let test = [];
let bands: string[] = [];
bands.push("Brown");

// Tuple
let myTuple: [number, string, boolean] = [532, "Kate", true];

let records = [423, "Berry", false];

records = myTuple;

myTuple[1] = "Rob";

// Objects
let myObject: object;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};

let instanceObj = {
  propA: "Chase",
  propB: 23,
};

instanceObj.propA = "Kelvin";

// type GuitarList = {
interface GuitarList {
  name?: string;
  isActive?: boolean;
  album: (string | number)[];
}

let eu: GuitarList = {
  name: "Flusk",
  isActive: true,
  album: [432, "Drone"],
};

let jp: GuitarList = {
  name: "Vivo",
  album: [43, "Groovy", "Honey"],
};

eu = jp;

const guitarHolder = (guitarList: GuitarList) => {
  if (guitarList.name) {
    return `Welcome${guitarList.name.toUpperCase()}`;
  }
  return "Superfine";
};

console.log(guitarHolder(jp));

// enums
enum grades {
  A = 98,
  B = 80,
  C = 70,
  D = 60,
}

console.log(grades.A);
