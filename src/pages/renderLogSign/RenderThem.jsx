import { useState } from 'react'
import SignInHome from '../loginPage/SignInHome'
import SignUpHome from '../signUpPage/SignUpHome'
// import './App.css'
// import FacebookComponent from './component/Login/Login'
// import SignUpFormComponent from './component/SignUp/SignUp'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function RenderThem() {

  const [page, setPage] = useState(false)

  return(
    <>
       
        {page ? <SignInHome  ShowPage={setPage} ></SignInHome>: <SignUpHome HidePage={setPage}  ></SignUpHome> }
    </>
  )
}

export default RenderThem