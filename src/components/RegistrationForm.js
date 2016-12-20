import React, { Component } from 'react'
import * as actions from '../actions/forms'

export default class RegistrationForm extends Component {
  constructor( props) {
    console.log(actions.formSubmit, 'form submit! -_-')
    super ( props )
    this.state = {
      name: '',
      email: '',
      password: '',
      phone_number: '',
      company: ''
    }
  }

  handleInput = ( event, stateKey ) => {
    this.setState({
      name: event.target.fullName,
      email: event.target.email,
      password: event.target.password,
      phone_number: event.target.number,
      company: event.target.company,
      newsletter_subscribed: true
     })
  }

  render() {
    return (
      <form action="http://localhost:5000/api/v1/users/register" method="post">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInput} />
        <input
          type="text"
          name="email"
          placeholder="Company email address"
          defaultValue={this.props.location.query.email}
          onChange={this.handleInput} />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInput} />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone number (optional)"
          value={this.state.number}
          onChange={this.handleInput} />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={this.state.company}
          onChange={this.handleInput} />
        <input
          type="checkbox"
          name="newsletter_subscribed"
          onChange={this.handleInput} />
        <input
          type="submit" />
      </form>
    )
  }
}
