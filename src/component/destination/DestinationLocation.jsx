import React from 'react'
// import arrow from '/src/assets/arrow.svg'
import Destinationstyle from './Destination.module.css'



const DestinationLocation = (props) => {

  const { CountryName, Spot, DN, LImage } = props

  return (
    <div className={Destinationstyle.destinationCard}>

<div className={Destinationstyle.Image}>
   <img src={LImage} alt={CountryName} />
</div>
     

      <div className={Destinationstyle.destinationMiddle}>

        <p>
          {CountryName}
        </p>

        <p>
          {Spot} 
        </p>

        <p>
        {DN}
        </p>

      </div>

      {/* <img src={arrow} alt="arrow" /> */}

    </div>
  )
}

export default DestinationLocation

