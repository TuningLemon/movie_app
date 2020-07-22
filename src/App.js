import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    // this.setState({ count: this.state.count - 1 }); setState에서  state.count를 부르는 것은 좋지 않음.
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1> The number is: {this.state.count} </h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
