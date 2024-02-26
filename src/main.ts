// generics

// Phase 1
const echo = <T>(arg: T): T => arg;

// checked the type should be an object
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(false));
console.log(isObj([43, 43, 61]));
console.log(isObj("Welcome"));
console.log(isObj(null));

console.log(isObj({ name: "Smith", age: 24 }));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

// checked the type should be an array or an object
const checkBool = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) return { value: arg, is: false };

  if (isObj(arg) && !Object.keys(arg as keyof T))
    return { value: arg, is: false };

  return { value: arg, is: !!arg };
};

console.log(checkBool(false));
console.log(checkBool(0));
console.log(checkBool(true));
console.log(checkBool(1));
console.log(checkBool("Dave"));
console.log(checkBool(""));
console.log(checkBool(null));
console.log(checkBool(undefined));
console.log(checkBool({}));
console.log(checkBool([]));
console.log(checkBool([1, 2, 3]));
console.log(checkBool(NaN));
console.log(checkBool(-1));

// Phase 2
interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

console.log(processUser({ id: 36, name: "Shun" }));

const getUserProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      suite: "Apt. 101",
      city: "Anytown",
      zipcode: "12345",
      geo: {
        lat: "40.7128",
        lng: "-74.0060",
      },
    },
    phone: "555-555-5555",
    website: "johndoe.com",
    company: {
      name: "ABC Inc.",
      catchPhrase: "Empowering businesses worldwide",
      bs: "Innovate and grow",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "jane.smith@example.com",
    address: {
      street: "456 Elm St",
      suite: "Suite 200",
      city: "Smalltown",
      zipcode: "54321",
      geo: {
        lat: "35.6895",
        lng: "139.6917",
      },
    },
    phone: "555-123-4567",
    website: "janesmith.com",
    company: {
      name: "XYZ Corp.",
      catchPhrase: "Driving innovation forward",
      bs: "Exceeding expectations",
    },
  },
];

console.log(getUserProperty(usersArray, "name"));
console.log(getUserProperty(usersArray, "email"));

class StateObject<T> {
  private value: T;

  constructor(item: T) {
    this.value = item;
  }

  get data(): T {
    return this.value;
  }

  set data(item: T) {
    this.value = item;
  }
}

const store = new StateObject("Victoria");
console.log(store.data);
store.data = "Smith";
console.log(store.data);
// store.data = 12;   // it can't be because of inferring the Victoria Type string

const myStore = new StateObject<(string | number | boolean)[]>([20]);
myStore.data = ["Smith", 32, false];
console.log(myStore.data);
// myStore.data = 'welcome' // it can't be because of inferring the union Array Type
