// arguments objext - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: "Perry Reid",
  cities: ["San Diego", "Fresno", "Bridgman"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

// challenge area

const multiplier = {
  //numbers - array of numbers
  numbers: [2, 6, 8, 24],
  //multiplyBy - single number
  multiplyBy: 3,
  //multiply - return new array numbers have been multiplied
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
