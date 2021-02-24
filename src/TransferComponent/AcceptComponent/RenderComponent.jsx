import React, { Component } from 'react'

export default class RenderComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <h1>Render:</h1>
        <h3>{this.props.input}</h3>
      </div>
    )
  }
}
