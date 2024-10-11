import React from 'react'
import SignInInput from '../loginPage/InputComponent'
import SignUpstyle from '../loginPage/SignIn.module.css'




const SignUp = ({onclick}) => {
    const toggle=()=>{
        window.scrollTo(0,0)
      }
    return (
        <>
            <form className={SignUpstyle.form} action="">
                <div className={SignUpstyle.signInForm}>
                    <label htmlFor="company">Company Name </label>
                    <SignInInput type='text' placeholder='Enter Company Name' id='company' />
                </div>

                <div className={SignUpstyle.signInForm}>
                    <label htmlFor="email">Email Address </label>
                    <SignInInput type='text' placeholder='Enter Email Address' id='email' />
                </div>

                <div className={SignUpstyle.signInForm}>
                    <label htmlFor="location">Location </label>
                    <SignInInput type='text' placeholder='Enter Your Address' id='location' />
                </div>

                <div className={SignUpstyle.signInForm}>
                    <label htmlFor="number">Phone Number </label>
                    <SignInInput type='number' placeholder='Phone Number' id='number' /> 
                </div>

                <div className={SignUpstyle.password}>
                    <div className={SignUpstyle.signInForm} id={SignUpstyle.create}>
                        <label htmlFor="password">Create Password </label>
                        <SignInInput type='password' placeholder='Create Password' id='password' />
                    </div>

                    <div className={SignUpstyle.signInForm} id={SignUpstyle.create}>
                        <label htmlFor="confirm">Confirm Password </label>
                        <SignInInput type='password' placeholder='Confirm Password' id='confirm' />
                    </div>
                </div>

                <button id={SignUpstyle.Signin2}>Create Account</button>
                <p>Already have an account?  <span onClick={toggle}><span style={{color:"#0a32ac",fontWeight:"600",cursor:"default"}} onClick={onclick}>Log In</span></span></p>
            </form>
        </>
    )
}

export default SignUp