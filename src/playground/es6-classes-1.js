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

const me = new Person("Perry", 37);
console.log(me.getDescription());

const test = new Person();
console.log(test);
