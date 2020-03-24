class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options Component Here
class Options extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>option 1</li>
          <li>option 2</li>
        </ul>
      </div>
    );
  }
}

// AddOption -> AddOption Component Here
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>+</button>
      </div>
    );
  }
}
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
