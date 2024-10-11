import React, { useContext } from 'react'
import { cardContents } from './PackageCollection'
import PackageCard from './PackageCard'
import { PackageContext } from './PackageContext'



const PackageMap = () => {

    const { selectedItem } = useContext(PackageContext)

    return (
        <>
            {selectedItem && cardContents[selectedItem].map((packageMap) => (
                <PackageCard
                    key={packageMap.index}
                    img={packageMap.image}
                    days={packageMap.days}
                    amount={packageMap.amount}
                    know={packageMap.know}
                    location={packageMap.location}
                />
            ))}
        </>
    )
}





export default PackageMap