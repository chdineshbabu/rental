import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='card-grid'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>

    </div>
  )
}

export default Home