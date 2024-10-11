import React from 'react'
import SignUpImage from '/src/assets/company.svg'
import SignUpstyle from '../loginPage/SignIn.module.css'

const SignUpRightImage = () => {
  return (
    <div className={SignUpstyle.image}>
    <img className={SignUpstyle.imagee} src={SignUpImage} alt="" />
    </div>
  )
}

export default SignUpRightImage