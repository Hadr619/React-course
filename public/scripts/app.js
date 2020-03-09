"use strict";

console.log("App.js is running"); // JSX - Javascript XML

var app = {
  title: "Indecision App",
  subTitle: "I'll choose for you!",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subTitle && React.createElement("p", null, app.subTitle), React.createElement("p", null, app.options.length > 0 ? "Here are your options fool" : "No Options"), React.createElement("p", null, app.options.length), React.createElement("button", {
    onClick: onRemoveAll
  }, "remove all"), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

console.log("TEST");
render();
