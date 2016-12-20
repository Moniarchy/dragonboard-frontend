import React, { Component } from 'react'
import Form from './Form'
export default class RegistrationForm extends Component {
  constructor( props) {
    super ( props )
    this.state = {
      name: '',
      email: '',
      password: '',
      phone_number: '',
      company: ''
    }
    this.onChange =  this.onChange.bind(this)
  }

  // handleInput = ( event, stateKey ) => {
  //   this.setState({
  //     name: event.target.fullName,
  //     email: event.target.email,
  //     password: event.target.password,
  //     phone_number: event.target.number,
  //     company: event.target.company,
  //     newsletter_subscribed: true
  //    })
  // }

  updateValue(name, value) {
    console.log(this.props)
    this.props.formFieldUpdate(name, value)
  }

  onChange(event) {
    console.log(event.target.attributes)
    this.updateValue(event.target.attributes.name, event.target.value)
  }

  render() {
    return (
      <Form action="http://localhost:5000/api/v1/users/register" method="post">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.onChange}
       />
        <input
          type="text"
          name="email"
          placeholder="Company email address"
          onChange={this.onChange}
       />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={this.onChange}
       />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone number (optional)"
          onChange={this.onChange}
       />
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={this.onChange}
       />
        <input
          type="checkbox"
          name="newsletter_subscribed"
          onChange={this.onChange}
       />
        <input
          type="submit" />
      </Form>
    )
  }
}
