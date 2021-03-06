import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props
  const links = auth.uid ? <SignInLinks /> : <SignedOutLinks />
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'> Home </Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
