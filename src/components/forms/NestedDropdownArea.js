import React, { Component } from 'react'
import Dropdown from './Dropdown'
import ParentDropdown from './ParentDropdown'
import "../../styles/form.css"

export default class NestedDropdownArea extends Component {
  render() {
    const { options, setFieldState, defaultValue, name, state } = this.props
    let nestedDropdownField = options.filter( option => {

      return option.value === state[name]
    })[0].field
    return (
      <div className="widget-form-field-nested-dropdown-container">
        <label>{name}</label>
        <ParentDropdown {...this.props} />
        <label>{nestedDropdownField.name}</label>
        <Dropdown
          {...nestedDropdownField}
          setFieldState={setFieldState}
          state={state}/>
      </div>
    )
  }
}
