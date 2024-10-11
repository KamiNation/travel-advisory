import React from 'react'
import './mainLayout.css'
import {Outlet} from "react-router-dom"
import Topnav from '../component/HomeComponent/nav/top/TopNav'
import IndexFooter from '../component/footer/IndexFooter'
const MainLayout = () => {
    
  return (
    <div id='layout'>
     <div id="nav"> <Topnav/></div>
      <div id="display"><Outlet/></div>
      <IndexFooter/>
    </div>
  )
}

export default MainLayout
