import React, { Component } from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import Button from '../Button.js'
import "../../styles/form.css"

export default class Form extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
    this.setFieldState = this.setFieldState.bind( this )
  }

  componentWillMount() {
    this.setupState()
  }

  setupState() {
    const { sections } = this.props
    sections.forEach( section => {
      section.fields.forEach ( field => {
        const { name, defaultValue } = field
        this.setState({[ name ]: defaultValue })
        if ( field.type === "nested-dropdown" ) {
          const nestedDropdownValue = field.options.filter( option => {
            return option.value === defaultValue
          })[0].field
          this.setState({
            [ nestedDropdownValue.name ]: nestedDropdownValue.defaultValue
          })
        }
      })
    })
  }

  setFieldState( state, stateValue ) {
    this.setState({
      [ state ]: stateValue
    })
  }

  submitWidget( state ) {
    const widgetData = {}
    for ( let key in state ) {
      widgetData[key] = state[key]
      widgetData.y = '10px'
      widgetData.x = '20px'
    }
    console.log('You submitted a widget with this data:', widgetData)
  }

  render() {
    const { type, sections, description, image } = this.props

    return (
      <div className="widget-form-container">
        <div className="widget-form-header">
          <h1>{type}</h1>
        </div>
        <form
          onSubmit={() => this.submitWidget( this.state )}
          className="widget-form">
          {sections.map(( section, id ) => (
              <Section
                {...section}
                setFieldState={this.setFieldState}
                state={this.state}
                key={`section-${id}`}
              />
            )
          )}
          <div className="widget-form-buttons">
            <Button content="Add Widget" type="submit"/>
            <Button content="Cancel" type="cancel"/>
          </div>
        </form>
        <div className="widget-form-preview">
          <Preview image={image} description={description}/>
        </div>
      </div>
    )
  }
}

class Section extends Component {
  render() {
    const { type, fields, setFieldState, state } = this.props

    return (
      <div className="widget-form-section">
        <div className="widget-form-section-type">
          {type === 'Setup'
            ? 'Setup — Now set up your widget'
            : 'Source — Where is your data coming from?'
          }
        </div>
        <div className="widget-form-section-fields">
          {fields.map(( field, id ) => (
              <Row
                {...field}
                setFieldState={setFieldState}
                state={state}
                key={`field-${id}`}
              />
            )
          )}
        </div>
      </div>
    )
  }
}

class Preview extends Component {
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

class Field extends Component {
  render() {
    const { type } = this.props

    if( type === 'text' ) {
      return <Text {...this.props} />
    } else if( type === 'dropdown' ) {
      return <Dropdown {...this.props} />
    } else if( type === 'nested-dropdown' ) {
      return <NestedDropdownArea {...this.props} />
    } else if( type === 'radio' ) {
      return <RadioField {...this.props} />
    } else {
      return <div>Not a valid component type >_<</div>
    }
  }
}

class Row extends Component {
  render () {
    const { name, type } = this.props
    if ( type === 'nested-dropdown' ) {
      return (
        <div className="widget-form-field">
          <Field {...this.props} />
        </div>
      )
    } else {
      return (
        <div className="widget-form-field">
          <label>{name}</label>
          <Field {...this.props} />
        </div>
      )
    }
  }
}

class Text extends Component {
  constructor ( props ) {
    super( props )
    this.onChangeHandler = this.onChangeHandler.bind( this )
  }

  onChangeHandler( event ) {
    const { setFieldState, name } = this.props
    setFieldState( name, event.target.value )
  }

  render() {
    const { state, name } = this.props
    return <input
      type="text"
      defaultValue={state[name]}
      onChange={this.onChangeHandler} />
  }
}

class Dropdown extends Component {
  constructor ( props ) {
    super( props )
    this.onChangeHandler = this.onChangeHandler.bind( this )
  }

  onChangeHandler( event ) {
    const { setFieldState, name } = this.props
    setFieldState( name, event.target.value )
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
          onChange={this.onChangeHandler}>
            {dropdownOptions}
        </select>
      )
    }
}

class RadioField extends Component {

  constructor ( props ) {
    super( props )
    this.onChangeHandler = this.onChangeHandler.bind( this )
  }

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
        onChange={this.onChangeHandler}
        selectedValue={state[name]}
        name={name}
        className="widget-form-fields-radio-container"
        key={`radio-container-${options.defaultValue}`}>
        {radioOptions}
      </RadioGroup>
    )
  }
}

class NestedDropdownArea extends Component {
  render() {
    const { options, setFieldState, defaultValue, name, state } = this.props
    let nestedDropdownField = options.filter( option => {
      return option.value === state[name]
    })[0].field
    return (
      <div className="widget-form-field-nested-dropdown-container">
        <label>{name}</label>
        <ParentDropdown
          {...this.props}
        />
        <label>{nestedDropdownField.name}</label>
        <Dropdown
          {...nestedDropdownField}
          setFieldState={setFieldState}
          state={state}
        />
      </div>
    )
  }
}

class ParentDropdown extends Component {
  constructor ( props ) {
    super( props )
    this.onChangeHandler = this.onChangeHandler.bind( this )
  }

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
        onChange={this.onChangeHandler}>
          {dropdownOptions}
      </select>
    )
  }
}
