import React from 'react'
// import SignUpInput from './InputComponent'
import SignInstyle from './SignIn.module.css'
import SignInInput from './InputComponent'






const SignIn = ({onclick}) => {
    const toggle=()=>{
        window.scrollTo(0,0)
      }
    return (
        <>
            <form className={SignInstyle.form} action="">
                <div className={SignInstyle.signInForm}>
                    <label htmlFor="email">Email Address </label>
                    <SignInInput type='text' placeholder='Enter Email Address' id='email' />  
                </div>

                <div className={SignInstyle.signInForm}>
                    <label htmlFor="password">Enter Password </label>
                    <SignInInput type='password' placeholder='Enter Password' id='password' />
                </div>


                <h6>Forgot Password?</h6>
                <button id={SignInstyle.login}>Login</button>
                <p>Dont have an account? <span onClick={toggle}><span style={{color:"#0a32ac",fontWeight:"600",cursor:"default"}} onClick={onclick}>Sign Up</span></span></p>
            </form>
        </>
    )
}

export default SignIn