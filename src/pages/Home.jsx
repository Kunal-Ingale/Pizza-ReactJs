import React from 'react'
import {Link} from "react-router-dom"
import bg from '../assets/pizza.jpeg'
import '../styles/home.css'

function Home() {
  return (
    <div className='Home'  style={{backgroundImage : `url(${bg})`}}>
      <div className='headerContainer'> 
      <h1>The Pizzeria</h1>
       <p>pizza to fit any taste</p>
       
        <Link to = "/menu">
        <button>Order Now</button>
       </Link>
       </div>
    </div>
  )
}

export default Home
