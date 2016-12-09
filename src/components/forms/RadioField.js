import React, { Component } from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import "../../styles/form.css"

export default class RadioField extends Component {
  onChangeHandler( value ) {
  const { setFieldState, name } = this.props

    setFieldState( name, value )
  }

  render() {

    const { value, defaultValue, options, name, state } = this.props
    let radioOptions = []
    radioOptions = options.map(
      (option, index) => {
        return (
          <div
            className="widget-form-fields-radio-section"
            key={`radio-section-${option.value}`}>
              <Radio key={`radio-${option.value}`} value={option.value} />
              <label>{option.label}</label>
          </div>
        )
      }
    )
    return (
      <RadioGroup
        onChange={this.onChangeHandler.bind(this)}
        selectedValue={state[name]}
        name={name}
        className="widget-form-fields-radio-container"
        key={`radio-container-${options.defaultValue}`}>
        {radioOptions}
      </RadioGroup>
    )
  }
}
