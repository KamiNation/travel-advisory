import React, { useContext, useContextHook ,useEffect,useState} from 'react'
import TraveladvisorCard from './TraveladvisorCard'
import { travelAdvContext } from './TravelAdvisorContext'

// import TravelAdvisorUser from './TravelAdvisorUser'


const TravelAdvisor = () => {
    // const {userRes} = useContext(travelAdvContext)
    // const [loading,setLoading] = useState(false)
    // useEffect(()=>{
        // TraveladvisorCard()
    // },[])
    // The below is a destructed useContext 
    // that allows this component to 
    // have access to the children inside 
    // the contextApi component "TravelAdvisorProvider"

    // The userData is a state that contains the response from the API
    // call

    // The searchAdvInput is a state that contains the value from the input field

    // The filteredResult is a state that contains the result of the filter data in 
    // "const filteredInput" filtered from the API
    

    const { userData, searchAdvInput, filteredResult } = useContext(travelAdvContext)


    return (
        <>

            {
                // The below code checks if the input field is greater
                // than 1 and if it's, it shows the filtered data 
                // (the filtered is the search of data from the API) else it 
                // shows the entire the response from the API.
                
                searchAdvInput.length > 1 ? (

                    filteredResult.map((element) => {
                        return (
                            <TraveladvisorCard
                                element={element}
                                key={element.id}
                            ></TraveladvisorCard>)
                    })
                ) :
                    (
                        // userData.results && userData.results.map((element)
                        userData.map((element) => {
                            return (
                                <div>
                                    
                                <TraveladvisorCard
                                    element={element}
                                    key={element.id}
                                ></TraveladvisorCard>
                            
                                </div>
                            )
                        }))

            }
            {/* <TravelAdvisorUser /> */}

        </>
    )
}

export default TravelAdvisor

