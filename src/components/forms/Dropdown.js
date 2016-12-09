import React, { Component } from 'react'
import "../../styles/form.css"

export default class Dropdown extends Component {
  onChangeHandler( event ) {
    const { setFieldState, name } = this.props

    setFieldState( name, event.target.value )
  }

  options() {
    return this.props.options.map( option =>
      <option value={option.value} key={`etc`}>{option.label}</option>
    )
  }

  render() {
    const { options, name, state } = this.props
    return (
      <select
        value={state[name]}
        className="widget-form-fields-select"
        id={`dropdown-select-${name}`}
        key={`dropdown-select-${name}`}
        onChange={this.onChangeHandler.bind(this)}>
          {this.options()}
      </select>
    )
  }
}
