import React from 'react'
import Packagestyle from './Package.module.css'




const PackageCard = (props) => {

    const { img, days, amount, know, location } = props



    return (

        <div className={Packagestyle.myCards}>

            <div className={Packagestyle.myCardsImage}>
                <img src={img} alt="the image refused to show" />
            </div>


            <div className={Packagestyle.cardDetails}>
                {location === 'Hot Deal' && <div className={Packagestyle.discount} />}
                <div className={Packagestyle.cardDetailsOne}>
                    <div className={Packagestyle.days}><p>{days}</p></div>
                    <div className={Packagestyle.amount}><p>{amount}</p></div>
                </div>

                <div className={Packagestyle.cardDetailsTwo}>
                    <p>Explore the beauty of the island for {days} with our travel agency</p>
                </div>

                <div className={Packagestyle.cardDetailsThree}>
                    <div className={Packagestyle.location}><p>{location}</p></div>
                    <div className={Packagestyle.know}><p>{know}</p></div>
                </div>
            </div>
        </div>

    )
}

export default PackageCard