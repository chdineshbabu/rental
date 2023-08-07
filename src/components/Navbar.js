import '../common/styles.css'
import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div className='navbar'>
    <h2>Rental</h2>
    <SearchBar />
    <h3 className='login'><a href='#'>Log in</a></h3>
    </div>
  )
}

export default Navbar