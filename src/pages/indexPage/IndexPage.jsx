import React from 'react'
import { useContext } from 'react'
import Header from '../../component/HomeComponent/nav/Header/Header'
import "./indexPage.css"
import IndexOfIndex from '../../component/IndexOfIndex'
// import { travelAdvContext } from '../../../../pages/TravelAdvisoryPage/TravelAdvisorContext'

// import './Header.css'
// import TraveladvisorCard from '../../../../pages/TravelAdvisoryPage/TraveladvisorCard'
import { travelAdvContext } from '../TravelAdvisoryPage/TravelAdvisorContext'
import TraveladvisorCard from '../TravelAdvisoryPage/TraveladvisorCard'
// import { useContext } from 'react'
const Home = () => {
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
                <TraveladvisorCard
                    element={element}
                    key={element.id}
                ></TraveladvisorCard>
                </div>
                )
                
        })
    ) :
        (
         "")
}
</div>
<div id='home'>
   
   <Header />
   <IndexOfIndex/>
   </div>
    </>
   
   
   
   
   
  )
}

export default Home
