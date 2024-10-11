import React from 'react'
import signInImage from '/src/assets/companySignUpImg.svg'
import SignInstyle from './SignIn.module.css'

const SignInRightImage = () => {
  return (
    <div className={SignInstyle.image}>
    <img className={SignInstyle.imagee} src={signInImage} alt="" />
    </div>
  )
}

export default SignInRightImage