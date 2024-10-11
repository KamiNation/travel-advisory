import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import IndexOfIndex from './component/IndexOfIndex.jsx'
import TravelAdvisorProvider from './pages/TravelAdvisoryPage/TravelAdvisorContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TravelAdvisorProvider>
      <App />
    </TravelAdvisorProvider>
    {/* <IndexOfIndex/> */}
  </React.StrictMode>,
)
