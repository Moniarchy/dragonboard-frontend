import React, { Component } from 'react'
import Button from './Button.js'
import Preview from './forms/Preview'
import Section from './forms/Section'
import "../styles/form.css"

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

  submit( state ) {
    const widgetData = {}
    for ( let key in state ) {
      widgetData[key] = state[key]
      widgetData.y = '10px'
      widgetData.x = '20px'
    }
  }

  render() {
    const { type, sections, description, image } = this.props
    return (
      <div className="widget-form-container">
        <div className="widget-form-header">
          <h1>{type}</h1>
        </div>
        <form
          onSubmit={this.submit.bind( this )}
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
          <Preview image={image} description={description}/>
      </div>
    )
  }
}
