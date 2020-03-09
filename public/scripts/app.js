"use strict";

console.log("App.js is running"); // JSX - Javascript XML

var app = {
  title: "Indecision App",
  subTitle: "I'll choose for you!",
  options: ["one", "two"]
};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subTitle && React.createElement("p", null, app.subTitle), React.createElement("p", null, app.options.length > 0 ? "Here are your options fool" : "No Options"));
var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  if (count > 0) {
    count--;
    renderCounterApp();
  }
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
  onClick: addOne
}, "+1"), React.createElement("button", {
  onClick: minusOne
}, "-1"), React.createElement("button", {
  onClick: reset
}, "Reset")); // Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// make reset button "reset" - setup reset function - log "reset"

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
    onClick: addOne
  }, "+1"), React.createElement("button", {
    onClick: minusOne
  }, "-1"), React.createElement("button", {
    onClick: reset
  }, "Reset"));
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
