import React from 'react'
import { MenuList } from '../Menulist'
import MenuItem from '../Components/MenuItem'
import '../styles/menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
      {MenuList.map((menuitem ,key)=>{
       return <MenuItem  
            key={key}
            image={menuitem.image} 
            name={menuitem.name} 
            price={menuitem.price}/>
      })}
        </div>
      
    </div>
  )
}

export default Menu
