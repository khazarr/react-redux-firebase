import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { dispatch } from 'rxjs/internal/observable/pairs';

class CreateProject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
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
    // console.log(this.state)
    this.props.createProject(this.state)
  }
  render () {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='gray-text text-darken-3'>Create new project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea id='content' rows="10" className='materialize-textarea' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn lighten-1 pink z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
