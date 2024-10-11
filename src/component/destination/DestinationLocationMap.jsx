import React from 'react'
import DestinationLocation from './DestinationLocation.jsx'
import { collections } from './DestinationCollection.jsx'

const DestinationLocationMap = () => {

    return (
        <>
            {
                collections.map((element) => {
                    return (
                        <DestinationLocation
                            CountryName={element.LocationCountryName}
                            Spot={element.LocationSpot}
                            DN={element.LocationDN}
                            LImage={element.LocationImage}

                            key={element.LocationIndex}
                        />

                    )
                }
                )
            }
        </>
    )
}

export default DestinationLocationMap