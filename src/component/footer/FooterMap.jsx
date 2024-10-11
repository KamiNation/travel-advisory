import React from 'react'
import { FooterCollection } from './FooterCollection'
import FooterCard from './FooterCard'

const FooterMap = () => {
    return (
        <>
            {
                FooterCollection.map((footer) => (
                    <FooterCard
                        key={footer.index}
                        title={footer.title}
                        descOne={footer.descOne}
                        descTwo={footer.descTwo}
                        descThree={footer.descThree}
                    />
                ))
            }
        </>
    )
}

export default FooterMap