import React from 'react'
import "./style.css"
import logo from "../../assets/fakeflixLogo.png"
import { IoMdNotificationsOutline, IoMdSearch } from 'react-icons/io'
import icon from "../../assets/download.jpg"
import { TiArrowSortedDown } from 'react-icons/ti'



const Navbar = () => {
  return (
    <div className='navBar'>
        <ul className='navBar-left'>
          <li className='logo-Container'>

          <img src={logo} alt="Logo" className='logo' />
          </li>
          <li >
            <a href="">My List</a>
          </li>
        </ul>
        <ul className='navBar-right'>
        <li>
        <IoMdSearch size={23}/>
        </li>
        <li>
        <IoMdNotificationsOutline size={23}/>
        </li>
        <li>
          <img src={icon} alt="icon" srcset="" className='icon' />
        </li>
        <li>
        <TiArrowSortedDown size={23}/>
        </li>
        </ul>
      </div>
  )
}

export default Navbar;