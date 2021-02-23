import React, { Component } from 'react';

export default class CountComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increase();
    this.decrease();
    this.reset();
  }

  increase = () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  decrease = () => {
    this.setState((state) => ({
      count: state.count - 1
    }));
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Current: {this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease} style={{margin: 5}}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
