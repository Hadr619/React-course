class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["TACO", "BURRITO", "POZOLE"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
//setup options prop for component
// render the length of array
// Options -> Options Component Here
class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option, index) => {
          return <p key={index}>{option}</p>;
        })}

        <ul>
          <li>
            <Option />
          </li>
        </ul>
      </div>
    );
  }
}
// Option -> Component here
class Option extends React.Component {
  render() {
    return <div>Option component here</div>;
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
