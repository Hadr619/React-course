console.log("App.js is running");

// JSX - Javascript XML
const app = {
  title: "Indecision App",
  subTitle: "I'll choose for you!",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>
        {app.options.length > 0 ? "Here are your options fool" : "No Options"}
      </p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>remove all</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

console.log("TEST");
render();
