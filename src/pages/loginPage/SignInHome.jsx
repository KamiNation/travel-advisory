import React from 'react'
// import SignUp from './SignIn'
// import SignUpRightImage from './SignInRightImage'
import SignInstyle from './SignIn.module.css'
import SignIn from './SignIn'
import SignInRightImage from './SignInRightImage'

const SignInHome = ({ShowPage}) => {
    const togglePage = ()=>{
        ShowPage((previousState) => !previousState)
    }
    return (
        <>
            <div className={SignInstyle.signInHome}>

                {/* <img src="" alt="" /> */}

                <div className={SignInstyle.signInleft}>
                    <h2>Login</h2>
                    {/* <div> */}
                        <SignIn onclick={()=>togglePage()} />
                    {/* </div> */}
                </div>
                
                <div className={SignInstyle.signInright}>
                    <SignInRightImage />
                </div>
            </div>


        </>
    )
}

export default SignInHome