import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state)
  }
  render () {
    const { auth } = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='gray-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp)
