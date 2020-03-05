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

const user = {
  name: "Perry Reid",
  age: 37,
  location: "San Diego"
};
function getLocation(location) {
  if (location) return <p>Location: {location}</p>;
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Annonymous"}</h1>
    {user.name && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
