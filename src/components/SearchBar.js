import React from 'react'
import SearchIcon from '../Asserts/search-icon.svg'

function SearchBar() {
  return (
    <div className='search-bar'>
      <input  placeholder='Search '></input>
      <img className='search-icon' src={SearchIcon} />

    </div>
  )
}

export default SearchBar