// setup contructor anem and age (default age to 0)
// getDescription - Perry Reid is 37 year(s) old.
class Person {
  constructor(name = "TACO", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I'm ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

// Traveler -> Person
// Add support homeLocation
// Override getGreeting
// 1.Hi. I am Perry Reid. I'm visiting from San Diego
// 2. Hi. I am Perry Reid

const me = new Traveler("Perry", 37, "kicking ass");
console.log(me.getGreeting());

const test = new Traveler();
console.log(test.getGreeting());
