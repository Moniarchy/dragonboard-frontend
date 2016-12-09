import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { content, type } = this.props
    
    return (
      <button className={`button button-${type}`}>{content}</button>
    )
  }
}
