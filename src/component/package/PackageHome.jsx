import React from 'react'
import PackageButtonCard from './PackageButtonCard'
import PackageMap from './PackageMap'
import Packagestyle from './Package.module.css'


const PackageHome = () => {
    return (
        <section className={Packagestyle.mainCon} id={Packagestyle.section}>
            <div className={Packagestyle.innerCon}>

                <div className={Packagestyle.pgTitle}>
                    <h1>Best Package For You</h1>
                </div>

                <div className={Packagestyle.buttonPg}>
                    <PackageButtonCard />
                </div>

                <div className={Packagestyle.cardPgCon}>
                   <PackageMap/>
                </div>

                <div className={Packagestyle.Bot}><button className={Packagestyle.discover}>Discover</button></div>
            </div>
        </section>
    )

}
export default PackageHome