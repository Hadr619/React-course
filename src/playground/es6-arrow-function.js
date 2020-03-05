// function square(x) {
//   return x * x;
// }

// console.log(square(3));

// // const squareArrow = x => {
// //   return x * x;
// // };

// const squareArrow = x => x * x;

// console.log(squareArrow(9));

// Challenge - use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// create second arrow function using arrow syntax

const fullName = "Perry Reid";

const getFirstName = fullName => {
  return fullName.split(" ")[0];
};

console.log(getFirstName(fullName));

const getFirstNameArrow = fullName => fullName.split(" ")[0];
console.log(getFirstNameArrow(fullName));
