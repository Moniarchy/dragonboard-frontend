import React, { Component } from 'react'
import Row from './Row'
import CONSTANTS from './Constants'
import "../../styles/form.css"

export default class Section extends Component {
  render() {
    const { type, fields, setFieldState, state } = this.props

    return (
      <div className="widget-form-section">
        <div className="widget-form-section-type">
          {type === CONSTANTS.SETUP
            ? CONSTANTS.SETUP_HEADING
            : CONSTANTS.SOURCE_HEADING
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
