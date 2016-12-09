import React, { Component } from 'react'
import Field from './Field'
import "../../styles/form.css"

export default class Row extends Component {
  labelChild() {
    const { type, name } = this.props

    if( type === 'nested-dropdown' ) {
      return <label>{name}</label>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="widget-form-field">
        {this.labelChild()}
        <Field {...this.props} />
      </div>
    )
  }
}
