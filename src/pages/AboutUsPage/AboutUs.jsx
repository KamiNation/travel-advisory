import React, { useEffect, useState, useContext } from 'react'
import TraveladvisorCard from '../TravelAdvisoryPage/TraveladvisorCard';
import { travelAdvContext } from '../TravelAdvisoryPage/TravelAdvisorContext';
// import React, { , useContextHook } from 'react'

// import { travelAdvContext } from '../../../../pages/TravelAdvisoryPage/TravelAdvisorContext'

// import './Header.css'
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

  const { userData, searchAdvInput, filteredResult } = useContext(travelAdvContext)

  return (
    <>

      <div className="conq">
        {
          // The below code checks if the input field is greater
          // than 1 and if it's, it shows the filtered data 
          // (the filtered is the search of data from the API) else it 
          // shows the entire the response from the API.

          searchAdvInput.length > 1 ? (

            filteredResult.map((element) => {
              return (
                <div className="each">
                  {/* <TraveladvisorCard */}
                  <TraveladvisorCard
                    element={element}
                    key={element.id.value}
                  ></TraveladvisorCard>
                </div>
              )

            })
          ) :
            (
              "")

        }
      </div>
      <h4>Welcome to Titans Advisory App! We're passionate about crafting unforgettable travel experiences tailored to you. With years of expertise, our dedicated team is committed to creating personalized journeys, whether you seek luxury or budget-friendly adventures. From booking flights to planning activities, we're here to ensure a seamless travel experience from start to finish. Let us be your trusted partner in exploring the world. Discover the joy of travel with Titans Advisory App.

      </h4>
    </>
  )
}

export default Header
