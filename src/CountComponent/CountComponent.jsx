import React, { Component } from 'react';
import { Button } from 'antd';

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
        <Button onClick={this.increase}>Increase</Button>
        <Button onClick={this.decrease} style={{margin: 5}}>Decrease</Button>
        <Button onClick={this.reset}>Reset</Button>
      </div>
    )
  }
}
