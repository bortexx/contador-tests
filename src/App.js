import React, { Component } from "react";
import "./App.css";
import Button from "./components/button/Button";
import { connect } from "react-redux";

import { increment, decrement } from "./redux/counter/count-actions-creators";
class App extends Component {
  render() {
 
    return (
      <div className="App">
        <h1>{this.props.count}</h1>
        <Button onClick={() => this.props.decrement()}>-</Button>
        <Button onClick={() => this.props.decrement(5)}>-5</Button>
        <Button onClick={() => this.props.increment()}>+</Button>
        <Button onClick={() => this.props.increment(5)}>+5</Button>
      </div>
    );
  }
}
const mapStateToProps = storeRedux => ({
  count: storeRedux.countReducer.number
});

const mapDispatchToProps = dispatch => ({
  
  increment: (param) => dispatch(increment(param)),
  decrement: (param) => dispatch(decrement(param))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
