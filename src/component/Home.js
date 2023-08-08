import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link><br></br>
      <Link to="/form">Form</Link>

    </div>
  )
}

export default Home
