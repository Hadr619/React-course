console.log("App.js is running");

// JSX - Javascript XML
const app = {
  title: "Indecision App",
  subTitle: "I'll choose for you!",
  options: ["one", "two"]
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>
      {app.options.length > 0 ? "Here are your options fool" : "No Options"}
    </p>
  </div>
);
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

let minusOne = () => {
  if (count > 0) {
    count--;
    renderCounterApp();
  }
};

let reset = () => {
  count = 0;
  renderCounterApp();
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// make reset button "reset" - setup reset function - log "reset"

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
