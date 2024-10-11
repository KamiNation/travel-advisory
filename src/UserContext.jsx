import React, { createContext, useContext } from 'react'
export const createcontext = createContext()
// import TravelAdvisorProvider from './pages/TravelAdvisoryPage/TravelAdvisorContext'
// import { travelAdvContext } from './pages/TravelAdvisoryPage/TravelAdvisorContext'




const UserContext = ({children}) => {

  // const {element} = useContext(travelAdvContext)

  return (
    <createcontext.Provider value={''}>
        {children}
    </createcontext.Provider>
  )
}

export default UserContext
