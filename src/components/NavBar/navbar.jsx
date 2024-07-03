import React, { useEffect, useState } from 'react'
import "./style.css"
import logo from "../../assets/fakeflixLogo.png"
import { IoMdNotificationsOutline, IoMdSearch } from 'react-icons/io'
import icon from "../../assets/download.jpg"
import { TiArrowSortedDown } from 'react-icons/ti'



const Navbar = () => {
  const [isScrolled,setIsScrolled]= useState(false);

  const handleScroll =()=>{
    const scrollTop = window.scrollY;
    if (scrollTop > 0 ){
      setIsScrolled(true);
    } else{
      setIsScrolled(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  return (

    <div className={`navBar ${isScrolled ? 'navBar-scrolled' : ''}`}>
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