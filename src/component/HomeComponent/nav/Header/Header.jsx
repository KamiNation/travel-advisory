import React, { useEffect, useState ,useContext} from 'react'
// import React, { , useContextHook } from 'react'
// import video from "/src/assets/backG.mp4"

// import { travelAdvContext } from '../../../../pages/TravelAdvisoryPage/TravelAdvisorContext'

import './Header.css'
// import TraveladvisorCard from '../../../../pages/TravelAdvisoryPage/TraveladvisorCard'

const Header = () => {

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

  // const { userData, searchAdvInput, filteredResult } = useContext(travelAdvContext)

  return (
    <>
    {/* <video autoPlay muted loop id="myVideo"> */}
  {/* <source type={video}></source> */}
{/* </video> */}
  <div id="header">
            <div id="headerword">
              <h3>We've got Independent Travel advisors, working for you</h3>
              <p id='p1'>Worry-less when going for a tour, we got you covered with our specialized Travel advisers</p>
      
            </div>
          </div>
    </>
  )
}

export default Header
