import React from 'react'
import SatisfactionMap from './SatisfactionMap'
import Satisfactionstyle from './Satisfaction.module.css'


const SatisfactionHome = () => {
    return (
        <section
            className={Satisfactionstyle.satisfactionContainer}
            id={Satisfactionstyle.section}
            >
            <h1>We always try to give you the best service</h1>
            <h4>We always try to make our customer Happy. We provide all kind of
                facilities. Your Satisfaction is our main priority.</h4>
            <div className={Satisfactionstyle.satisfactions}>
                <SatisfactionMap />
            </div>
        </section>
    )
}

export default SatisfactionHome