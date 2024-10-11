import React, { useContext } from 'react'
import TravelAdvisorSearch from './TravelAdvisorSearch'
import TravelAdvisor from './TravelAdvisor'


const TravelAdvisorCardPage = () => {

  // This is the compoent that houses the 
  // search component (  <TravelAdvisorSearch /> )
  // and the component ( <TravelAdvisor />) 
  // that acts as the index for  other component

  return (
    <section className='travel-advisor'>
      <h1 className='title'>Travel Advisors </h1>
      <div className='card-page-filter'>
        <TravelAdvisorSearch />
      </div>
      <div className='card-page-user'>
        <TravelAdvisor />
      </div>
    </section>
  )
}

export default TravelAdvisorCardPage