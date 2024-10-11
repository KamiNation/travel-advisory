import React from 'react'
import SignUpRightImage from './SignUpRightImage'
import SignUp from './SignUp'
import SignUpstyle from '../loginPage/SignIn.module.css'

const SignUpHome = ({HidePage}) => {
    const closeModal = ()=>{
        HidePage((previouState)=> !previouState)
    }
  return (
    <>
    <div className={SignUpstyle.signInHome}>

        {/* <img src="" alt="" /> */}

        <div className={SignUpstyle.signInleft}>
            <h2>Create Account</h2>
            {/* <div> */}
                <SignUp onclick={()=>closeModal()} />
            {/* </div> */}
        </div>
        
        <div className={SignUpstyle.signInright}>
            <SignUpRightImage />
        </div>
    </div>


</>
  )
}

export default SignUpHome