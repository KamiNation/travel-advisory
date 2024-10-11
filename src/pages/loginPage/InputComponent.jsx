import React from 'react'
import SignInstyle from './SignIn.module.css'
const SignInInput = (props) => {
    return (
        <>
            <input className={SignInstyle.theInput} type={props.type} id={props.id} placeholder={props.placeholder} />
        </>
    )
}

export default SignInInput