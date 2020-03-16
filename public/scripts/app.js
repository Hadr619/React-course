"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// setup contructor anem and age (default age to 0)
// getDescription - Perry Reid is 37 year(s) old.
var Person = /*#__PURE__*/function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "TACO";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getGreeting",
    value: function getGreeting() {
      return "Hi I'm ".concat(this.name);
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return "".concat(this.name, " is ").concat(this.age, " year(s) old");
    }
  }]);

  return Person;
}();

var me = new Person("Perry", 37);
console.log(me.getDescription());
var test = new Person();
console.log(test);
