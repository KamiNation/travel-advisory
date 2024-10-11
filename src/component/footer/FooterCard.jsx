import React from 'react'
import Footerstyle from './Footer.module.css'

const FooterCard = (props) => {
    const { title, descOne, descTwo, descThree } = props
    return (
        <>
            <div className={Footerstyle.footer}>
               
                    
                        <h4>{title}</h4>
                        <p>{descOne}</p>
                        <p>{descTwo}</p>
                        <p>{descThree}</p>
             
            </div>
        </>

    )
}
export default FooterCard