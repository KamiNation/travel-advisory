import React, { useEffect, useState } from 'react'
import Links from '../../links/Links'
import './topNav.css'
import { Link } from 'react-router-dom'
import TravelAdvisorSearch from '../../../../pages/TravelAdvisoryPage/TravelAdvisorSearch'
// import Icon from '../../links/Icon'
import { IoPersonCircleSharp } from "react-icons/io5";
import Icon from '../../links/Icon'

const Topnav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [showDropDownMenu, setShowDropDownMenu] = useState(false)
  const toggleDrop = ()=>{
    setShowDropDownMenu(!showDropDownMenu)
    window.scrollTo(0,0)
  }
  const toggle=()=>{
    window.scrollTo(0,0)
  }
  const [change, setChange] = useState(false)

  const functionWidth = () => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }
  useEffect(() => {
    functionWidth()
  }, [])

  const toggleMenu = () => {
    setShowDropDownMenu(!showDropDownMenu)
    setChange(!change)
  }

  const [navScroll, setNavScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavScroll(true)
      }
      else {
        setNavScroll(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (

    <div id="thenav" style={{
      position: navScroll ? 'fixed' : 'static', top: 0,
      paddingTop: navScroll ? "5px" : "5px", background: navScroll ? "rgba(7, 7, 7, 1)" : "none"
    }}>

      <div id="logo">
        <div id="theLogo">
          <img src="/src/assets/logo.png" alt="travel" />
        </div>
      </div>


      {
      window.innerWidth < 650 ? (
        <div className="dropdown">
          <button style={{ textShadow: navScroll ? "2px 2px 5px #504f4f" : "2px 2px 5px #000" }} onClick={toggleMenu}> Menu</button>
          {
          showDropDownMenu && (
            <div id="dropdown-content">
              <Links onClick={toggleDrop} to={'/'} label={'Home'} />
              <Links onClick={toggleDrop} to={'/about'} label={'About Us'} />
              <Links onClick={toggleDrop} to={'/traveladvisory'} label={'Travel advisory'} />
            </div>
          )
          }
        </div>
      ) : (
        <div id='links'>
          <Links onClick={toggle} to={'/'} label={'Home'} />
          <Links onClick={toggle} to={'/about'} label={'About Us'} />
          <Links onClick={toggle} to={'/traveladvisory'} label={'Travel advisory'} />
        </div >
      )
      }


      <div id="search">
        {/* <TravelAdvisorSearch/> */}
        <TravelAdvisorSearch/>
        <div id="icon">
  
  <Icon text={"Account"} onClick={toggle} link={"/signin"}  icon={<IoPersonCircleSharp  size={"30px"} />} ></Icon>
</div>
      </div>
      
      
      
      
    </div>
  )
}

export default Topnav
