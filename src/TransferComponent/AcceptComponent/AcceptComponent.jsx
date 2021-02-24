import React, { Component } from 'react'

export default class AcceptComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <h1>Input</h1>
        <input type="text" value={this.props.input} onChange={this.props.handleChange}/>
      </div>
    )
  }
}
