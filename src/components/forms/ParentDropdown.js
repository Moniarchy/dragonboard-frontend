import React, { Component } from 'react'
import "../../styles/form.css"

export default class ParentDropdown extends Component {
  onChangeHandler( event ) {
    const { setFieldState, name, options } = this.props

    setFieldState( name, event.target.value )
    const childDropdown = options.filter( option => {
      return option.value === event.target.value
    })[0].field
    setFieldState( childDropdown.name, childDropdown.defaultValue )
  }

  render() {
    const { options, name, state } = this.props
    let dropdownOptions = []
    dropdownOptions = options.map(
      option => (
        <option value={option.value} key={`dropdown-option-${option.value}`}>
          {option.label}
        </option>
      )
    )
    return (
      <select
        value={state[name]}
        className="widget-form-fields-select"
        id={`dropdown-select-${name}`}
        key={`dropdown-select-${name}`}
        onChange={this.onChangeHandler.bind(this)}>
          {dropdownOptions}
      </select>
    )
  }
}
