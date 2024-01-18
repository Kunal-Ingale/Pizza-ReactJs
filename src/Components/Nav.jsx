import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import pizza from '../assets/Pizza-logo-design-template-Vector-PNG.png'  
import '../styles/nav.css'


function nav() {
const [openLinks,setopenLinks] =useState(false)

const toggleNav =()=>{
   setopenLinks(!openLinks);
}

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={pizza}  className='img' />
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        
       <button  onClick={toggleNav}
       ><ReorderIcon/></button> 

      </div>

    </div>
  )
}

export default nav

