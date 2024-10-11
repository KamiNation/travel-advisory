import React from 'react'
import TravelAdvisorCardPage from './TravelAdvisorCardPage'
import TravelAdvisorProvider from './TravelAdvisorContext'


// This component has the context provider (TravelAdvisorProvider) wrapped 
// around a component (TravelAdvisorCardPage) and this allows every other 
// component inside component (TravelAdvisorCardPage) to have access to the 
// the value of the context provider

const IndexTravel = () => {
  return (
    <TravelAdvisorProvider>
      <TravelAdvisorCardPage/>
    </TravelAdvisorProvider>
  )
}

export default IndexTravel