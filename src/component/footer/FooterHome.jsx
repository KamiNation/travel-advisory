import React from 'react'
import FooterMap from './FooterMap'
import Footerstyle from './Footer.module.css'
import shareImage from '/src/assets/share.png'
import sailLogo from '/src/assets/sail_logo.png'

const FooterHome = () => {
    return (
        <section className={Footerstyle.section}>
            <div >
                <div className={Footerstyle.subscribe}>
                    <img id={Footerstyle.share} src={shareImage} alt="share image" />
                    <h3 id={Footerstyle.h1}> Subscribe to get information, latest news and other interesting offer about Cobham</h3>
                    <form className={Footerstyle.sub}>
                        <input id={Footerstyle.email} type="email" placeholder=" Your email" />
                        <button id={Footerstyle.btnSubscribe} type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={Footerstyle.footerFooter}>
                <div className={Footerstyle.logo}>
                    <div className={Footerstyle.SailLogo}>
                        <img src={sailLogo} alt="Sail Logo" />
                    </div>
                    <p id={Footerstyle.pp}>Book your page in minutes get full control for much longer</p>
                </div>
                <div className={Footerstyle.footerMap}>
                    <FooterMap />
                </div>
            </div>
            <p id={Footerstyle.right}>All rights reserved @SAIL Tech-Titans. Design by Arun, T Kumar and Odumodu White. </p>
        </section>
    )
}

export default FooterHome