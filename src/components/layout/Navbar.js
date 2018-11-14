import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='branc-logo'> Home </Link>
        <SignInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log('nav state', state)
  return {
  }
}

export default connect(mapStateToProps)(Navbar)
