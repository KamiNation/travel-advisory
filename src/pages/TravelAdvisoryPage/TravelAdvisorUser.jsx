import React, { useContext } from 'react'
// import { travelAdvContext, useTravelContext } from './TravelAdvisorContext'
import "./moreAbout.css"
import { useLocation, useParams } from 'react-router-dom'
import ConnectBtn from './Connect'
const TravelAdvisorUser = (props) => {

  // We use the useLocation hook to access the state 
  // from inside our "TraveladvisorCard" Link
  const { state } = useLocation()

  if (!state) {
    return <div>No data available</div>;
  }


  const element = JSON.parse(state)

  if (!element) {
    return <div>No data available</div>;
  }

  console.log("Hiya", element)

  const { firstName, lastName, email, image, phoneNo, region, country } = element

  return (
    <div id='person'>
      <div className="userCard">

        <div className="right">

          <img src={image} alt="user"></img>
          <div className="left">
            <div className="left1">
              <h1>Name: {firstName} {lastName}</h1>
              <p className="titlee">Proffesion: Travel Advisor</p>
            </div>
            <div className="left2">
              <p className="titlee">Resident: {region} {country}</p>
              <p className="titlee">Mail: {email}</p>
              {/* <p className="titlee">Phone no: {phoneNo}</p> */}
            </div>
          </div>

        </div>
        <div className="third">
          <p>Excited to share my love for travel and diverse experiences! I specialize in crafting personalized trips to destinations near and far, including Nigeria and beyond. With living experiences in Lagos, Abuja, Port Harcourt, Kano, Enugu, and Kaduna, I have a deep understanding of Nigerian cultures and travel logistics. My educational journey also included time abroad in Spain and Nairobi, broadening my global perspective. Now, I'm eager to use my expertise to guide you on unforgettable adventures through Nigeria and beyond. Let's explore the world together!</p>
          {/* <div className="goLive">
            <p>Do you want to have a live sessionr</p>
            <button>Go Live</button>
          </div> */}

          <div className="connect">
            <h3>Connect with me now</h3>
            <ConnectBtn text={"Go Live"}/>
            <ConnectBtn text={"Chat with me"}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TravelAdvisorUser