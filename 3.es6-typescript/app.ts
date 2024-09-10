console.log("Time to get started...");
const printOut: (a: number | string, b: number | string) => void = (a, b) =>
  console.log(a);
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 3, 5, 67, 8);
console.log(addNumbers);

// const hobbies = ["sports", "cooking"];
// const activeHobbies = ["Hiking"];

// activeHobbies.push(...hobbies);
// console.log(activeHobbies);

const hobbies = ["sports", "cooking"];
const [hobbie1, hobbie2, ...remainningHibbies] = hobbies;
console.log(hobbies, hobbie1, hobbie2);
const person = {
  firstname: "cho",
  age: 20,
};
const { firstname, age } = person;
console.log(firstname, age);
