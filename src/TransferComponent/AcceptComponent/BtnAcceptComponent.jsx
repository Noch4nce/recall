import React, { Component } from 'react'

export default class BtnAcceptComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Button Pressed'
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={() => this.props.updateData(this.state.name)}>Press button</button>
      </div>
    )
  }
}
