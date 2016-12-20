import React, { Component } from 'react'

export default class Form extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    values: React.PropTypes.object,
    update: React.PropTypes.func,
    reset: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  }

  childContextTypes: {
    update: React.PropTypes.func,
    reset: React.PropTypes.func,
    values: React.PropTypes.object
  }

  // getChildContext() {
  //   return {
  //     update: this.props.formFieldUpdate,
  //     reset: this.props.formReset,
  //     values: this.props.values
  //   }
  // }

  render(){

    return <form>
      {this.props.children}
    </form>
  }
}
