import React, { Component } from 'react'
import "../../styles/form.css"

export default class Preview extends Component {
  render() {
    const { description, image, title } = this.props
    
    return (
      <div className="widget-form-preview">
        <img alt={title} src={image} />
        <div>{description}</div>
      </div>
    )
  }
}
