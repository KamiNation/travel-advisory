import React from 'react'
import DestinationMap from './DestinationMap'
import Destinationstyle from './Destination.module.css'
import DestinationLocationMap from './DestinationLocationMap'




const Destination = () => {
  return (
    <section className={Destinationstyle.destination} id={Destinationstyle.section}>

      <h1>Our Advisors Location and Popular Destination  </h1>

      <div className={Destinationstyle.destinationMapLocation}>

        <div className={Destinationstyle.destinationMap}>
          <DestinationMap />
        </div>

        <div className={Destinationstyle.destinationCardOne}>
          <DestinationLocationMap />
        </div>
      </div>

    </section>
  )
}

export default Destination