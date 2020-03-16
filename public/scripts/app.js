"use strict";

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement("div", null, React.createElement("h1", null, "Visibility Toggle"), React.createElement("button", {
    onClick: toggleVisibility
  }, visibility ? "Hide Details" : "Show Details"), visibility && React.createElement("div", null, React.createElement("p", null, "Hey. These are the deets")));
  ReactDOM.render(template, appRoot);
};

render();
