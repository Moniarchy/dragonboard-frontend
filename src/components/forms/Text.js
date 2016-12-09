import React, { Component } from 'react'


export default class Text extends Component {
  onChangeHandler( event ) {
  const { setFieldState, name } = this.props
  
    setFieldState( name, event.target.value )
  }

  render() {

    const { state, name } = this.props
    return <input
      type="text"
      defaultValue={state[name]}
      onChange={this.onChangeHandler.bind(this)} />
  }
}
