import React, { Component } from 'react';
import AcceptComponent from '../AcceptComponent/AcceptComponent';
import JoinComponent from '../AcceptComponent/RenderComponent';
import BtnAcceptComponent from '../AcceptComponent/BtnAcceptComponent';

export default class SendComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      name: 'Button not pressed'
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  updateData = (value) => {
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <div>
        <p>State: {this.state.name}</p>
        <BtnAcceptComponent updateData={this.updateData}/>
        <AcceptComponent
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <JoinComponent input={this.state.inputValue} />
      </div>
    );
  }
}
