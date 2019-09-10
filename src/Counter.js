import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";

class Counter extends Component {
  //   state = { count: 0 };

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    this.props.increment();
  };

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    this.props.decrement();
  };

  reset = () => {
    // this.setState({ count: this.state.count - 1 });
    this.props.reset();
  };

  render() {
    return (
      <div className="container-inner">
        <button onClick={this.increment}>Add One</button>
        <h1>{this.props.count}</h1>

        <button onClick={this.decrement}>Subtract One</button>
        <h1>{this.props.hamsters}</h1>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    hamsters: state.hamsters
  };
}

const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
