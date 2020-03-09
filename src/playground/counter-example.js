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
