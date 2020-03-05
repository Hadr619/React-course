"use strict";

// arguments objext - no longer bound with arrow functions
var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1)); // this keyword - no longer bound

var user = {
  name: "Perry Reid",
  cities: ["San Diego", "Fresno", "Bridgman"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};
console.log(user.printPlacesLived()); // challenge area

var multiplier = {
  //numbers - array of numbers
  numbers: [2, 6, 8, 24],
  //multiplyBy - single number
  multiplyBy: 3,
  //multiply - return new array numbers have been multiplied
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
